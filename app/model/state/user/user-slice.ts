import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SlicesNames } from "../slices-names"
import { User } from "@model/entities/user"
import { addNewUserAsync } from "./user-async-actions"
import { Interest } from "@app/model/entities/interest"

export interface UserState extends User {
    //erros
    saveNewUserFails: boolean
}
const initialState: UserState = {
    id: "",
    fullName: "",
    email: "",
    registerAt: "", // timestamp format
    photoURL: "",
    interests: [],
    savedArticles: [],
    savedFilters: [],
    //erros
    saveNewUserFails: false
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
            state.photoURL = ""
            state.savedArticles = []
            state.savedFilters = []
            state.interests = []
        },
        updateUser: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id
            state.fullName = action.payload.fullName
            state.email = action.payload.email
            state.photoURL = action.payload.photoURL
            state.registerAt = action.payload.registerAt
            state.savedArticles = action.payload?.savedArticles
            state.savedFilters = action.payload?.savedFilters
            state.interests = action.payload?.interests || []
        },
        setInterests: (state, action: PayloadAction<Interest[]>) => {
            state.interests = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            //Add new user after register
            .addCase(addNewUserAsync.pending, () => { })
            .addCase(addNewUserAsync.fulfilled, (state, action) => {
                state.saveNewUserFails = false
            })
            .addCase(addNewUserAsync.rejected, (state, action) => {
                state.saveNewUserFails = true
            })
    }
})

//Actions
export const {
    updateUser,
    resetUser,
    setInterests
} = UserSlice.actions

//Reducer
export default UserSlice.reducer