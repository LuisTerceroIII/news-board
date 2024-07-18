import { User } from "@app/model/entities/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SlicesNames } from "../slices-names";
import { api } from "@app/services/api";

export const addNewUserAsync = createAsyncThunk(
    `${SlicesNames.USER}/addNewUserAsync`,
    async (payload: unknown, { getState, dispatch, rejectWithValue }) => {
        try {
            await api.firebaseAPI.userAPI.addUser(payload as User)
        } catch (e) {
            rejectWithValue(`${e}`)
        }
    }
)