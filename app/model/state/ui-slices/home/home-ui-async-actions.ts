import { createAsyncThunk } from "@reduxjs/toolkit"
import { SlicesNames } from "../../slices-names"
import { AppStore } from "../../root-store"
import { HomeUIState, MixInterestsFeedTracker, nextPageInInterestsTrackers, setUserMixInterests } from "./home-ui-slice"
import { api } from "@app/services/api"
import { LanguageCode } from "@app/model/entities/enums"
import { Article } from "@app/model/entities/article"
import { UserState } from "../../user/user-slice"
import { shuffleArray } from "@app/util/general-helpers"
import { Alert } from "react-native"
import { initializeInterestsTrackers } from "@app/util/store-helpers"
import { Interest } from "@app/model/entities/interest"

export const fetchGlobalFeedAsync = createAsyncThunk(
    `${SlicesNames.HOME_UI}/fetchGlobalFeed`,
    async (payload, { getState, rejectWithValue }) => {
        try {
            const state: AppStore = getState() as AppStore
            const homeState: HomeUIState = state?.[SlicesNames.HOME_UI]
            const page = homeState?.globalFeedPage
            const abortController = new AbortController()
            const newArticles: Article[] = await api.theNewsAPI.getTopNews(page, LanguageCode.Spanish, abortController) || []
            return newArticles
        } catch (e) {
            rejectWithValue(`e`)
        }
    }
)
export const fetchSingleInterestNewsAsync = createAsyncThunk(
    `${SlicesNames.HOME_UI}/fetchSingleInterestNews`,
    async (payload, { getState, rejectWithValue, dispatch }) => {
        try {
            const state: AppStore = getState() as AppStore
            const homeState: HomeUIState = state?.[SlicesNames.HOME_UI]
            const actionInterest: Interest = homeState?.actionInterest
            const page = homeState?.actionInterestFeedPage
            // Request all the interests
            const abortController = new AbortController()
            const newArticles: Article[] = await api.theNewsAPI.getInterestNews(actionInterest?.keyword || "", page, LanguageCode.Spanish, abortController) || []
            return newArticles
        } catch (e) {
            rejectWithValue(`e`)
            Alert.alert(`e`)
        }
    }
)
export const fetchUserMixFeedAsync = createAsyncThunk(
    `${SlicesNames.HOME_UI}/fetchUserMixFeed`,
    async (payload, { getState, rejectWithValue, dispatch }) => {
        try {
            const state: AppStore = getState() as AppStore
            const homeState: HomeUIState = state?.[SlicesNames.HOME_UI]
            const userState: UserState = state?.[SlicesNames.USER]

            const userInterests: Interest[] = userState?.interests || []
            let interestsTracker: MixInterestsFeedTracker[] = homeState?.userMixInterestsTracker
            const mainPage: number = homeState?.userMixFeedPage
            // Indicates the number of different interests (maximum) per request
            const maxInterestsToFetch = 3
            // If the interests to track are empty, load them otherwise, ignore
            if (interestsTracker?.length === 0) {
                dispatch(setUserMixInterests(userInterests || []))
                // If empty, load from the auxiliary method, by the next state the store will have the data
                interestsTracker = initializeInterestsTrackers(userInterests, mainPage)
            }
            // Select the interests that are still on the main page
            const inMainPageInterests = shuffleArray(interestsTracker?.filter(interestTracker => interestTracker?.page === mainPage))
            // Separate the interests that will be fetched
            const interestToFetch: MixInterestsFeedTracker[] = inMainPageInterests?.slice(0, maxInterestsToFetch)
            const interestsKeywords: string[] = interestToFetch?.map(interest => interest.keyword || "") || []
            // Request all the interests
            const abortController = new AbortController()
            //@ts-ignore
            const newArticles: Article[] = await api.theNewsAPI.getMultipleInterestsNews(interestsKeywords, mainPage, LanguageCode.Spanish, abortController) || []
            // If everything went well, update the page of all fetched interests if there are no more interests on the main page
            // Move to the next page
            dispatch(nextPageInInterestsTrackers(interestToFetch))
            return newArticles
        } catch (e) {
            rejectWithValue(`e`)
            Alert.alert(`e`)
        }
    }
)
