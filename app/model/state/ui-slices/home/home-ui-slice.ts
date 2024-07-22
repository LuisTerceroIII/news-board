import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SlicesNames } from "../../slices-names";
import { Article } from "@app/model/entities/article";
import { AppStore } from "../../root-store";

interface HomeUIState {
    actionInterest: Article,
    mixArticles: []
}
const initialState: HomeUIState = {
    actionInterest: {},
    mixArticles: []
}
export const HomeUISlice = createSlice({
    name: SlicesNames.GLOBAL_UI,
    initialState,
    reducers: {
        setActionInterest: (state, action: PayloadAction<Article> ) => {
            state.actionInterest = action.payload
        }
    }
})
//Actions
export const { setActionInterest } = HomeUISlice.actions
//Views
export const getActionInterest = (state: AppStore) => state[SlicesNames.HOME_UI]?.actionInterest
//Reducer
export default HomeUISlice.reducer