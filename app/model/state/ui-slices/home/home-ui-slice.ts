import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SlicesNames } from "../../slices-names"
import { Article } from "@app/model/entities/article"
import { AppStore } from "../../root-store"
import { Interest } from "@app/model/entities/interest"
import { data } from "@assets/mock-data/articles-dummy"
import { MixInterest, ReqState } from "@app/util/types"
import { fetchGlobalFeedAsync, fetchSingleInterestNewsAsync, fetchUserMixFeedAsync } from "./home-ui-async-actions"

export interface MixInterestsFeedTracker {
    interestId?: string
    keyword?: string
    page?: number
    reachEnd?: boolean
}

export interface HomeUIState {
    actionInterest: Interest
    actionArticle: Article
    userFeedMix: Article[]
    userFeedActionInterests: Article[]
    globalFeed: Article[]
    //fetching
    //global feed
    globalFeedPage: number
    globalFeedReq: ReqState
    //mix feed
    userMixInterestsTracker: MixInterestsFeedTracker[]
    userMixFeedReq: ReqState
    userMixFeedPage: number // Increment this page value by 1 when all interests in the mix tracker have passed this page counter
    //Action interest / Single interest feed
    actionInterestFeedPage: number
    actionInterestFeedReq: ReqState
}
const initialState: HomeUIState = {
    actionArticle: {},
    actionInterest: MixInterest,
    userFeedMix: data.data,
    userFeedActionInterests: [],
    globalFeed: [],
    globalFeedPage: 1,
    globalFeedReq: ReqState.IDLE,
    userMixInterestsTracker: [],
    userMixFeedPage: 1,
    userMixFeedReq: ReqState.IDLE,
    actionInterestFeedPage: 1,
    actionInterestFeedReq: ReqState.IDLE
}
export const HomeUISlice = createSlice({
    name: SlicesNames.GLOBAL_UI,
    initialState,
    reducers: {
        setActionInterest: (state, action: PayloadAction<Interest>) => {
            if(state.actionInterest?.id === action.payload?.id) return
            state.actionInterest = action.payload
            state.userFeedActionInterests = []
            state.actionInterestFeedPage = 1
        },
        nextPageGlobalFeed: (state) => {
            state.globalFeedPage = state.globalFeedPage + 1
        },
        setUserMixInterests: (state, action: PayloadAction<Interest[]>) => {
            const interestsToTrack: MixInterestsFeedTracker[] = action.payload?.map(interest => {
                return {
                    interestId: interest.id,
                    page: state.userMixFeedPage,
                    keyword: interest.keyword,
                    reachEnd: false
                }
            })
            state.userMixInterestsTracker = [...state.userMixInterestsTracker, ...interestsToTrack]
        },
        // When moving a group of trackers to the next page, we need to check if the global mix page should also be incremented
        nextPageInInterestsTrackers: (state, action: PayloadAction<MixInterestsFeedTracker[]>) => {
            // Increment the page of each received tracker
            state.userMixInterestsTracker = state.userMixInterestsTracker?.map(tracker => {
                if (action.payload?.find(actionTracker => tracker?.interestId === actionTracker.interestId)) {
                    return {
                        ...tracker,
                        page: (tracker?.page || 1) + 1
                    }
                } else return tracker
            })
            // Check if it is necessary to increment the global mix feed page
            const interestsInMainPage = state.userMixInterestsTracker?.filter(tracker => state.userMixFeedPage === tracker.page)
            if (interestsInMainPage?.length === 0) state.userMixFeedPage = state.userMixFeedPage + 1
        },
        setActionArticle: (state, action: PayloadAction<Article>) => {
            state.actionArticle = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            //Global Feed
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
            //Mix Feed
            .addCase(fetchUserMixFeedAsync.pending, (state, action) => {
                state.userMixFeedReq = ReqState.PENDING
            })
            .addCase(fetchUserMixFeedAsync.fulfilled, (state, action) => {
                state.userMixFeedReq = ReqState.IDLE
                //@ts-ignore
                state.userFeedMix = [...state.userFeedMix, ...action?.payload]
            })
            .addCase(fetchUserMixFeedAsync.rejected, (state, action) => {
                state.userMixFeedReq = ReqState.FAILED
            })
            //Action interest feed
            .addCase(fetchSingleInterestNewsAsync.pending, (state, action) => {
                state.actionInterestFeedReq = ReqState.PENDING
            })
            .addCase(fetchSingleInterestNewsAsync.fulfilled, (state, action) => {
                state.actionInterestFeedReq = ReqState.IDLE
                state.actionInterestFeedPage = state.actionInterestFeedPage + 1
                //@ts-ignore
                state.userFeedActionInterests = [...state.userFeedActionInterests, ...action?.payload]
            })
            .addCase(fetchSingleInterestNewsAsync.rejected, (state, action) => {
                state.actionInterestFeedReq = ReqState.FAILED
            })
    }
})
//Actions
export const {
    setActionInterest,
    nextPageGlobalFeed,
    setUserMixInterests,
    nextPageInInterestsTrackers,
    setActionArticle
} = HomeUISlice.actions
//Views
export const getActionInterest = (state: AppStore) => state[SlicesNames.HOME_UI]?.actionInterest
export const getActionArticle = (state: AppStore) => state[SlicesNames.HOME_UI]?.actionArticle
export const viewingMixFeed = (state: AppStore) => state[SlicesNames.HOME_UI]?.actionInterest?.id === MixInterest?.id

export const getUserFeed = (state: AppStore) => {
    const mixIsSelected = state[SlicesNames.HOME_UI]?.actionInterest?.id === MixInterest?.id
    return mixIsSelected ? state[SlicesNames.HOME_UI]?.userFeedMix : state[SlicesNames.HOME_UI]?.userFeedActionInterests
}
export const getGlobalFeed = (state: AppStore) => state[SlicesNames.HOME_UI]?.globalFeed
export const globalFeedReq = (state: AppStore) => state[SlicesNames.HOME_UI]?.globalFeedReq
export const userMixFeedReq = (state: AppStore) => state[SlicesNames.HOME_UI]?.userMixFeedReq
export const actionInterestFeedReq = (state: AppStore) => state[SlicesNames.HOME_UI]?.actionInterestFeedReq

//Reducer
export default HomeUISlice.reducer