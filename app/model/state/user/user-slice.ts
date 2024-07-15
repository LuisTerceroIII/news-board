import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SlicesNames } from "../slices-names";
import { User } from "../../entities/user";
import { Article } from "../../entities/article";
import { AppStore } from "../root-store";

interface UserState {
    user: User
}

const initialState: UserState = {
    user: new User("tercero.vivo", "Luis", "Espinoza")
}

export const UserSlice = createSlice({
    name: SlicesNames.USER,
    initialState,
    reducers: {
        saveArticle: (state, action: PayloadAction<{ article: Article }>) => {
            state.user.getUserInteractions.savedArticles.saveArticle(action.payload.article)
        }
    }
})

export const { saveArticle } = UserSlice.actions;
export const getFullName = (state: AppStore) => `${state.userSlice.user.name} ${state.userSlice.user.lastName}`
export const getSavedArticles = (state: AppStore) => state.userSlice?.user?.getUserInteractions?.getSavedArticles
export default UserSlice.reducer;