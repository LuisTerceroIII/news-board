import { AppStore } from "../root-store"

//Views
export const getIsLogin = (state: AppStore) => state.authSlice.isLogin
export const hasPendingRegisterErrors = (state: AppStore) => {
    return (
        state.authSlice.emailError.state ||
        state.authSlice.usernameError.state ||
        state.authSlice.passError.state ||
        state.authSlice.repeatedPassError.state
    )
}
export const hasEmptyRegisterField = (state: AppStore) => {
    return (
        state.authSlice.email?.length === 0 ||
        state.authSlice.username.length === 0 ||
        state.authSlice.password.length === 0 ||
        state.authSlice.repeatedPassword.length === 0
    )
}
export const hasPendingLoginErrors = (state: AppStore) => {
    return (
        state.authSlice.emailError.state ||
        state.authSlice.passError.state
    )
}
export const hasEmptyLoginField = (state: AppStore) => {
    return (
        state.authSlice.email?.length === 0 ||
        state.authSlice.password.length === 0
    )
}