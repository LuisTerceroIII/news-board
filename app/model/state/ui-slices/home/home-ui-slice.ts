import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SlicesNames } from "../../slices-names";
import { Article } from "@app/model/entities/article";
import { AppStore } from "../../root-store";
import { Interest } from "@app/model/entities/interest";
import { data } from "@assets/mock-data/articles-dummy"
import { MixInterest } from "@app/util/types";

interface HomeUIState {
    actionInterest: Interest,
    userFeedMix: Article[],
    userFeedActionInterests: Article[],
    globalFeed: Article[]
}
const initialState: HomeUIState = {
    actionInterest: MixInterest,
    userFeedMix: data.data,
    userFeedActionInterests: [],
    globalFeed: data.data
}
export const HomeUISlice = createSlice({
    name: SlicesNames.GLOBAL_UI,
    initialState,
    reducers: {
        setActionInterest: (state, action: PayloadAction<Article> ) => {
            state.actionInterest = action.payload
        }
    }
})
//Actions
export const { setActionInterest } = HomeUISlice.actions
//Views
export const getActionInterest = (state: AppStore) => state[SlicesNames.HOME_UI]?.actionInterest
export const getUserFeed = (state: AppStore) => {
    const mixIsSelected =  state[SlicesNames.HOME_UI]?.actionInterest?.id === MixInterest?.id
    return mixIsSelected ? state[SlicesNames.HOME_UI]?.userFeedMix : state[SlicesNames.HOME_UI]?.userFeedActionInterests
}
export const getGlobalFeed = (state: AppStore) => state[SlicesNames.HOME_UI]?.globalFeed
//Reducer
export default HomeUISlice.reducer