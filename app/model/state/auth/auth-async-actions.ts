import { createAsyncThunk } from "@reduxjs/toolkit"
import { SlicesNames } from "../slices-names"
import { AppStore } from "../root-store"
import { AuthState } from "./auth-slice"
import { resetUser, setInterests, updateUser } from "../user/user-slice"
import { api } from "@services/api"
import { addNewUserAsync } from "../user/user-async-actions"
import { User } from "@app/model/entities/user"

//Api calls
export const registerEmailPassAsync = createAsyncThunk(
    `${SlicesNames.AUTH}/loginEmailPass`,
    async (payload:{ goToInterests?: () => void }, { getState, rejectWithValue, dispatch }) => {
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

                const user: User = {
                    id: res?.user?.uid,
                    fullName: authState?.username,
                    email: authState?.email,
                    photoURL: res?.user?.photoURL || "",
                    registerAt: new Date(res.user.metadata.creationTime || "").getTime().toString()
                }

                dispatch(updateUser(user))

                const userExists = await api.firebaseAPI.userAPI.userExist(user?.id)
                if(!userExists) dispatch(addNewUserAsync(user))

                if(typeof payload?.goToInterests === "function") payload?.goToInterests()
                return res
            }


        } catch (e) {
            return rejectWithValue(`${e}`)
        }
    }
)
export const enterUsingEmailPassAsync = createAsyncThunk(
    `${SlicesNames.AUTH}/enterUsingEmailPass`,
    async (payload:{ goHome?: () => void }, { getState, rejectWithValue, dispatch }) => {

        try {
            const state: AppStore = getState() as AppStore
            const authState: AuthState = state?.[SlicesNames.AUTH]

            if (authState?.emailError.state) rejectWithValue("Check form fields")
            else {
                const res = await api.firebaseAPI.authAPI.doSignInWithEmailAndPassword(authState.email, authState.password)
                if(res.user?.uid) {
                    const interests = await api.firebaseAPI.userAPI.getInterests(res?.user?.uid)
                    dispatch(updateUser({
                        id: res?.user?.uid,
                        fullName: res.user.displayName || "",
                        email: res.user.email || "",
                        photoURL: res?.user?.photoURL || "",
                        registerAt: new Date(res.user.metadata.creationTime || "").getTime().toString(),
                        interests: interests
                    }))
                    if(interests?.length > 0) {
                        if(typeof payload?.goHome === "function") payload?.goHome()
                    }
                }
                return res
            }

        } catch (e) {
            return rejectWithValue(`${e}`)
        }
    }
)
export const enterUsingGoogleAsync = createAsyncThunk(
    `${SlicesNames.AUTH}/enterUsingGoogle`,
    async(payload:{ goHome?: () => void, goToInterests?: () => void }, { getState, rejectWithValue, dispatch }) => {
        
        const res = await api.firebaseAPI.authAPI.signInWithGoogle()
        const interests = await api.firebaseAPI.userAPI.getInterests(res?.user?.uid)
        const user: User = {
            id: res?.user?.uid,
            fullName: res.user.displayName || "",
            email: res.user.email || "",
            photoURL: res?.user?.photoURL || "",
            registerAt: new Date(res.user.metadata.creationTime || "").getTime().toString(),
            interests: interests
        }
        dispatch(updateUser(user))
        const userExists = await api.firebaseAPI.userAPI.userExist(user?.id)
        if(!userExists) dispatch(addNewUserAsync(user))
        if(interests?.length > 0) {
            if(typeof payload?.goHome === "function") payload?.goHome()
        } else if(typeof payload?.goToInterests === "function") payload?.goToInterests()
            
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