import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SlicesNames } from "../../slices-names";
import { Article } from "@app/model/entities/article";
import { AppStore } from "../../root-store";
import { Interest } from "@app/model/entities/interest";
import { data } from "@assets/mock-data/articles-dummy"
import { MixInterest, ReqState } from "@app/util/types";
import { fetchGlobalFeedAsync } from "./home-ui-async-actions";

export interface HomeUIState {
    actionInterest: Interest
    userFeedMix: Article[]
    userFeedActionInterests: Article[]
    globalFeed: Article[]
    //fetching
    globalFeedPage: number
    globalFeedReq: ReqState

}
const initialState: HomeUIState = {
    actionInterest: MixInterest,
    userFeedMix: data.data,
    userFeedActionInterests: [],
    globalFeed: [],
    globalFeedPage: 1,
    globalFeedReq: ReqState.IDLE
}
export const HomeUISlice = createSlice({
    name: SlicesNames.GLOBAL_UI,
    initialState,
    reducers: {
        setActionInterest: (state, action: PayloadAction<Article> ) => {
            state.actionInterest = action.payload
        },
        nextPageGlobalFeed: (state) => {
            state.globalFeedPage = state.globalFeedPage + 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGlobalFeedAsync.pending, (state, action) => {
                state.globalFeedReq = ReqState.PENDING
            })
            .addCase(fetchGlobalFeedAsync.fulfilled, (state, action) => {
                state.globalFeedReq = ReqState.IDLE
                state.globalFeedPage = state.globalFeedPage + 1
                //@ts-ignore
                state.globalFeed = [...state.globalFeed, ...action?.payload]
            })
            .addCase(fetchGlobalFeedAsync.rejected, (state, action) => {
                state.globalFeedReq = ReqState.FAILED
            })
    }
})
//Actions
export const { setActionInterest, nextPageGlobalFeed } = HomeUISlice.actions
//Views
export const getActionInterest = (state: AppStore) => state[SlicesNames.HOME_UI]?.actionInterest
export const getUserFeed = (state: AppStore) => {
    const mixIsSelected =  state[SlicesNames.HOME_UI]?.actionInterest?.id === MixInterest?.id
    return mixIsSelected ? state[SlicesNames.HOME_UI]?.userFeedMix : state[SlicesNames.HOME_UI]?.userFeedActionInterests
}
export const getGlobalFeed = (state: AppStore) => state[SlicesNames.HOME_UI]?.globalFeed
export const globalFeedReq = (state: AppStore) => state[SlicesNames.HOME_UI]?.globalFeedReq

//Reducer
export default HomeUISlice.reducer