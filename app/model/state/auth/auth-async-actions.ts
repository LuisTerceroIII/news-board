import { createAsyncThunk } from "@reduxjs/toolkit"
import { SlicesNames } from "../slices-names"
import { AppStore } from "../root-store"
import { AuthState } from "./auth-slice"
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { resetUser, updateUser } from "../user/user-slice"

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

            if (hasPendingRegisterErrors) rejectWithValue("Pending errors")

            const res = await auth().createUserWithEmailAndPassword(authState.email, authState.password)

            dispatch(updateUser({
                id: res?.user?.uid,
                username: authState?.username,
                email: authState?.email,
                photoURL: res?.user?.photoURL || "",
                registerAt: new Date(res.user.metadata.creationTime || "").getTime().toString()
            }))

            return res
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
    
            if (authState?.emailError.state) rejectWithValue("Check email")
            const res = await auth().signInWithEmailAndPassword(authState.email, authState.password)
            if (res == null) rejectWithValue("Not user")
            dispatch(updateUser({
                id: res?.user?.uid,
                username: "",
                name: res.user.displayName || "",
                email: res.user.email || "",
                photoURL: res?.user?.photoURL || "",
                registerAt: new Date(res.user.metadata.creationTime || "").getTime().toString()
            }))
    
            return res
        } catch(e) {
            return rejectWithValue(`${e}`)
        }
    }
)
export const enterUsingGoogleAsync = createAsyncThunk(
    `${SlicesNames.AUTH}/enterUsingGoogle`,
    async (payload, { getState, rejectWithValue, dispatch }) => {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn()
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken)
        // Sign-in the user with the credential
        const res = await auth().signInWithCredential(googleCredential)
        dispatch(updateUser({
            id: res?.user?.uid,
            username: "",
            name: res.user.displayName || "",
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
            const res = await auth().signOut()
            dispatch(resetUser())
            return res
        } catch (e) {
            rejectWithValue(e)
        }
    }
)