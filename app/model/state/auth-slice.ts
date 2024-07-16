import { createSlice } from "@reduxjs/toolkit";
import { SlicesNames } from "./slices-names";
import { AppStore } from "./root-store";

enum AuthProvider {
    EMAIL_PASS = "emailPass",
    GOOGLE = "google"
}
interface AuthState {
    isLogin: boolean
    email: string
    password: string
    repeatedPassword: string
    provider: AuthProvider
}

const initialState: AuthState = {
    isLogin: false,
    email: "",
    password: "",
    repeatedPassword: "",
    provider: AuthProvider.EMAIL_PASS
}

export const AuthSlice = createSlice({
    name: SlicesNames.AUTH,
    initialState,
    reducers: {
        createUserEmailPass: (state, action) => {
            console.log({
                email: state.email,
                password: state.password,
                repeatedPassword: state.repeatedPassword
            })
        }
    }

})

//Actions
export const { createUserEmailPass } = AuthSlice.actions

//Views
export const getIsLogin = (state: AppStore) => state.authSlice.isLogin

export default AuthSlice.reducer