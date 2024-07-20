import { createAsyncThunk } from "@reduxjs/toolkit";
import { SlicesNames } from "../../slices-names";
import { api } from "@app/services/api";
import { AppStore } from "../../root-store";

export const saveUserInterestsAsync = createAsyncThunk(
    `${SlicesNames.INTERESTS_UI}/saveUserInterests`,
    async (payload: unknown, { getState, rejectWithValue }) => {
        try {
            const state: AppStore = getState()
            const currentUserId = state?.[SlicesNames.USER]?.id
            const interests = state?.[SlicesNames.INTERESTS_UI]?.interests
            const res = await api.firebaseAPI.userAPI.patchInterests(interests, currentUserId)
            if(typeof payload === "function") payload()
            return res
        } catch(e) {
            rejectWithValue(`${e}`)
        }
    }
)

//export const saveUserInterestsAndLoadNews