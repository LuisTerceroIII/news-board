import { createAsyncThunk } from "@reduxjs/toolkit"
import { SlicesNames } from "../slices-names"
import { AppStore } from "../root-store"
import { AuthState } from "./auth-slice"
import { resetUser, updateUser } from "../user/user-slice"
import { api } from "@services/api"

//Api calls
export const registerEmailPassAsync = createAsyncThunk(
    `${SlicesNames.AUTH}/loginEmailPass`,
    async (payload, { getState, rejectWithValue, dispatch }) => {
        try {
            const state: AppStore = getState() as AppStore
            const authState: AuthState = state?.[SlicesNames.AUTH]

            const hasPendingRegisterErrors = (
                authState?.emailError.state ||
                authState?.usernameError.state ||
                authState?.passError.state ||
                authState?.repeatedPassError.state
            )

            if (hasPendingRegisterErrors) rejectWithValue("Check form fields")
            else {
                const res = await api.firebaseAPI.authAPI.doCreateUserWithEmailAndPassword(authState.email, authState.password)

                dispatch(updateUser({
                    id: res?.user?.uid,
                    fullName: authState?.username,
                    email: authState?.email,
                    photoURL: res?.user?.photoURL || "",
                    registerAt: new Date(res.user.metadata.creationTime || "").getTime().toString()
                }))

                return res
            }


        } catch (e) {
            return rejectWithValue(`${e}`)
        }
    }
)
export const enterUsingEmailPassAsync = createAsyncThunk(
    `${SlicesNames.AUTH}/enterUsingEmailPass`,
    async (payload, { getState, rejectWithValue, dispatch }) => {

        try {
            const state: AppStore = getState() as AppStore
            const authState: AuthState = state?.[SlicesNames.AUTH]

            if (authState?.emailError.state) rejectWithValue("Check form fields")
            else {
                const res = await api.firebaseAPI.authAPI.doSignInWithEmailAndPassword(authState.email, authState.password)

                dispatch(updateUser({
                    id: res?.user?.uid,
                    fullName: res.user.displayName || "",
                    email: res.user.email || "",
                    photoURL: res?.user?.photoURL || "",
                    registerAt: new Date(res.user.metadata.creationTime || "").getTime().toString()
                }))

                return res
            }

        } catch (e) {
            return rejectWithValue(`${e}`)
        }
    }
)
export const enterUsingGoogleAsync = createAsyncThunk(
    `${SlicesNames.AUTH}/enterUsingGoogle`,
    async (payload, { getState, rejectWithValue, dispatch }) => {
       
        const res = await api.firebaseAPI.authAPI.signInWithGoogle()
        dispatch(updateUser({
            id: res?.user?.uid,
            fullName: res.user.displayName || "",
            email: res.user.email || "",
            photoURL: res?.user?.photoURL || "",
            registerAt: new Date(res.user.metadata.creationTime || "").getTime().toString()
        }))
        return res
    }
)
export const signOutAsync = createAsyncThunk(
    `${SlicesNames.AUTH}/signOut`,
    async (payload, { dispatch, rejectWithValue }) => {
        try {
            const res = await api.firebaseAPI.authAPI.doSignOut()
            dispatch(resetUser())
            return res
        } catch (e) {
            rejectWithValue(e)
        }
    }
)