import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SlicesNames } from "../slices-names"
import { User } from "../../entities/user"
import { Article } from "../../entities/article"
import { AppStore } from "../root-store"

export interface UserState {
    user: User
    id: string
    username: string
    name: string
    lastName: string
    email: string
    registerAt: string // timestamp format
    photoURL: string
}

const initialState: UserState = {
    user: new User(),
    id: "",
    username: "",
    name: "",
    lastName: "",
    email: "",
    registerAt: "", // timestamp format
    photoURL: ""
}

export const UserSlice = createSlice({
    name: SlicesNames.USER,
    initialState,
    reducers: {
        saveArticle: (state, action: PayloadAction<{ article: Article }>) => {
            state.user.getUserInteractions.savedArticles.saveArticle(action.payload.article)
        },
        resetUser: (state) => {
            state.user = new User()
            state.id = ""
            state.username = ""
            state.name = ""
            state.lastName = ""
            state.email = ""
            state.registerAt = ""
            state.photoURL = ""
        },
        updateUser: (state, action: PayloadAction<{
            id: string,
            username: string,
            email: string,
            photoURL: string,
            registerAt: string, // getTime
            name?:string
        }>) => {
            state.id = action.payload.id
            state.username = action.payload.username
            state.name = action.payload.name || ""
            state.email = action.payload.email
            state.photoURL = action.payload.photoURL
            state.registerAt = action.payload.registerAt
        }
    }
})

//Actions
export const {
    saveArticle,
    updateUser,
    resetUser
} = UserSlice.actions

//Views
export const getFullName = (state: AppStore) => `${state.userSlice.user.name} ${state.userSlice.user.lastName}`
export const getSavedArticles = (state: AppStore) => state.userSlice?.user?.getUserInteractions?.getSavedArticles

//Reducer
export default UserSlice.reducer