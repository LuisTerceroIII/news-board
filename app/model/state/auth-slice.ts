import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SlicesNames } from "./slices-names";
import { AppStore } from "./root-store";
import { ErrorInput } from "../../util/types";
import { validateEmail, validateNotEmpty, validatePasswordLong, validatePasswordUppercase, validateRepeatedPassword } from "../../util/validations";
import { dictionary } from "../../dictionary/dictionary";

enum AuthProvider {
    EMAIL_PASS = "emailPass",
    GOOGLE = "google"
}
interface AuthState {
    isLogin: boolean
    username: string
    email: string
    password: string
    repeatedPassword: string
    provider: AuthProvider

    //forms validations errors
    usernameError: ErrorInput
    emailError: ErrorInput
    passError: ErrorInput
    repeatedPassError: ErrorInput
}

const initialState: AuthState = {
    isLogin: false,
    username: "",
    email: "",
    password: "",
    repeatedPassword: "",
    provider: AuthProvider.EMAIL_PASS,
    //forms validations errors
    usernameError: { state: false, errorsTx: [] },
    emailError: { state: false, errorsTx: [] },
    passError: { state: false, errorsTx: [] },
    repeatedPassError: { state: false, errorsTx: [] }
}

export const AuthSlice = createSlice({
    name: SlicesNames.AUTH,
    initialState,
    reducers: {
        resetAuthForm: (state) => {
            state.username = ""
            state.email = ""
            state.password = ""
            state.repeatedPassword = ""
            state.usernameError =  { state: false, errorsTx: [] },
            state.emailError =  { state: false, errorsTx: [] },
            state.passError =  { state: false, errorsTx: [] },
            state.repeatedPassError =  { state: false, errorsTx: [] }
        },
        createUserEmailPass: (state) => {
            console.log({
                email: state.email,
                password: state.password,
                repeatedPassword: state.repeatedPassword
            })
        },
        setUsername: (state, action: PayloadAction<{ username: string }>) => {
            state.username = action.payload.username
        },
        setEmail: (state, action: PayloadAction<{ email: string }>) => {
            state.email = action.payload.email
        },
        setPassword: (state, action: PayloadAction<{ password: string }>) => {
            state.password = action.payload.password
        },
        setRepeatPassword: (state, action: PayloadAction<{ password: string }>) => {
            state.repeatedPassword = action.payload.password
        },
        checkRegisterError: (state) => {
            //username
            state.usernameError.state = !validateNotEmpty(state.username)
            //email
            state.emailError.state = !validateEmail(state.email) || !validateNotEmpty(state.email)
            if (state.emailError.state) {
                const errorIsAdd = state.emailError.errorsTx?.find(error => error.errorLabel === "invalid_email")
                if (!errorIsAdd) {
                    state.emailError.errorsTx = [...state.emailError.errorsTx, { errorLabel: "invalid_email", tx: dictionary.errors?.invalid_email || "" }]
                }
            }
            //password
            state.passError.state = !validatePasswordUppercase(state.password) || !validatePasswordLong(state.password) || !validateNotEmpty(state.password)
            if (state.passError.state) {
                if (!validateNotEmpty(state.password)) {
                    let errorIsAdd = state.passError.errorsTx?.find(error => error.errorLabel === "empty_field")
                    if (!errorIsAdd) {
                        state.passError.errorsTx = [...state.passError.errorsTx, { errorLabel: "empty_field", tx: dictionary.errors?.empty_field || "" }]
                    }
                } else {
                    state.passError.errorsTx = [...state.passError.errorsTx?.filter(err => err.errorLabel !== "empty_field")]
                }
                if (!validatePasswordUppercase(state.password)) {
                    let errorIsAdd = state.passError.errorsTx?.find(error => error.errorLabel === "missing_upper_char")
                    if (!errorIsAdd) {
                        state.passError.errorsTx = [...state.passError.errorsTx, { errorLabel: "missing_upper_char", tx: dictionary.errors?.missing_upper_char || "" }]
                    }
                } else {
                    state.passError.errorsTx = [...state.passError.errorsTx?.filter(err => err.errorLabel !== "missing_upper_char")]
                }
                if (!validatePasswordLong(state.password)) {
                    let errorIsAdd = state.passError.errorsTx?.find(error => error.errorLabel === "short_pass")
                    if (!errorIsAdd) {
                        state.passError.errorsTx = [...state.passError.errorsTx, { errorLabel: "short_pass", tx: dictionary.errors?.short_pass || "" }]
                    }
                } else {
                    state.passError.errorsTx = [...state.passError.errorsTx?.filter(err => err.errorLabel !== "short_pass")]
                }
            }
            //repeat pass
            state.repeatedPassError.state = !validateRepeatedPassword(state.password, state.repeatedPassword) || !validateNotEmpty(state.repeatedPassword)
            if (!validateNotEmpty(state.repeatedPassword)) {
                let errorIsAdd = state.repeatedPassError.errorsTx?.find(error => error.errorLabel === "empty_field")
                if (!errorIsAdd) {
                    state.repeatedPassError.errorsTx = [...state.repeatedPassError.errorsTx, { errorLabel: "empty_field", tx: dictionary.errors?.empty_field || "" }]
                }
            } else {
                state.repeatedPassError.errorsTx = [...state.repeatedPassError.errorsTx?.filter(err => err.errorLabel !== "empty_field")]
            }
            if (!validateRepeatedPassword(state.password, state.repeatedPassword)) {
                let errorIsAdd = state.repeatedPassError.errorsTx?.find(error => error.errorLabel === "repeat_pass_not_match")
                if (!errorIsAdd) {
                    state.repeatedPassError.errorsTx = [...state.repeatedPassError.errorsTx, { errorLabel: "repeat_pass_not_match", tx: dictionary.errors?.repeat_pass_not_match || "" }]
                }
            } else {
                state.repeatedPassError.errorsTx = [...state.repeatedPassError.errorsTx?.filter(err => err.errorLabel !== "repeat_pass_not_match")]
            }
        }
    }
})

//Actions
export const {
    resetAuthForm,
    createUserEmailPass,
    setEmail,
    setPassword,
    setRepeatPassword,
    setUsername,
    checkRegisterError,

} = AuthSlice.actions

//Views
export const getIsLogin = (state: AppStore) => state.authSlice.isLogin

export default AuthSlice.reducer