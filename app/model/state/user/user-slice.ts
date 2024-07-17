import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SlicesNames } from "../slices-names"
import { User } from "../../entities/user"
import { Article } from "../../entities/article"
import { AppStore } from "../root-store"

export interface UserState {
    user: User
}

const initialState: UserState = {
    user: new User()
}

export const UserSlice = createSlice({
    name: SlicesNames.USER,
    initialState,
    reducers: {
        saveArticle: (state, action: PayloadAction<{ article: Article }>) => {
            state.user.getUserInteractions.savedArticles.saveArticle(action.payload.article)
        },
        updateUser: (state, action: PayloadAction<{
            username: string,
            email: string
        }>) => {
            console.log(`${SlicesNames.USER}`,JSON.stringify(action.payload, null, 2))
            state.user.username = action.payload.username
            state.user.email = action.payload.email

        }
    }
})

//Actions
export const { 
    saveArticle,
    updateUser
} = UserSlice.actions

//Views
export const getFullName = (state: AppStore) => `${state.userSlice.user.name} ${state.userSlice.user.lastName}`
export const getSavedArticles = (state: AppStore) => state.userSlice?.user?.getUserInteractions?.getSavedArticles

//Reducer
export default UserSlice.reducer