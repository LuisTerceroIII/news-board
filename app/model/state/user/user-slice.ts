import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SlicesNames } from "../slices-names"
import { User } from "@model/entities/user"

export interface UserState extends User {}
const initialState: UserState = {
    id: "",
    fullName: "",
    email: "",
    registerAt: "", // timestamp format
    photoURL: "",
    savedArticles: [],
    savedFilters: []
}

export const UserSlice = createSlice({
    name: SlicesNames.USER,
    initialState,
    reducers: {
        resetUser: (state) => {
            state.id = ""
            state.fullName = ""
            state.email = ""
            state.registerAt = ""
            state.photoURL = "",
            state.savedArticles = []
            state.savedFilters = []
        },
        updateUser: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id
            state.fullName = action.payload.fullName
            state.email = action.payload.email
            state.photoURL = action.payload.photoURL
            state.registerAt = action.payload.registerAt
            state.savedArticles = action.payload?.savedArticles
            state.savedFilters = action.payload?.savedFilters
        }
    }
})

//Actions
export const {
    updateUser,
    resetUser
} = UserSlice.actions

//Reducer
export default UserSlice.reducer