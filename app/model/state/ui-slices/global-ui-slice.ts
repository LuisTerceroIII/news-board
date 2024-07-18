import { createSlice } from "@reduxjs/toolkit";
import { SlicesNames } from "../slices-names";

interface GlobalUIState {
    modalIsVisible: boolean
}
const initialState: GlobalUIState = {
    modalIsVisible: false
}

export const GlobalUISlice = createSlice({
    name: SlicesNames.GLOBAL_UI,
    initialState,
    reducers: {
        showModal: (state) => {
            state.modalIsVisible = true
        },
        closeModal: (state) => {
            state.modalIsVisible = false
        }
    }
})

export const {
    showModal,
    closeModal
} = GlobalUISlice.actions

//reducer
export default GlobalUISlice.reducer;
