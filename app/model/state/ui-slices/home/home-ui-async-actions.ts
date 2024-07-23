import { createAsyncThunk } from "@reduxjs/toolkit";
import { SlicesNames } from "../../slices-names";
import { AppStore } from "../../root-store";
import { HomeUIState } from "./home-ui-slice";
import { api } from "@app/services/api";
import { LanguageCode } from "@app/model/entities/enums";
import { Article } from "@app/model/entities/article";

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
        } catch(e) {
            rejectWithValue(`e`)
        }
    }
)