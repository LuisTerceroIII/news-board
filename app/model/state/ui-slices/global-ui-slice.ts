import { ScreenNames } from "@app/navigation";
import { createSlice } from "@reduxjs/toolkit";
import { AppStore } from "../root-store";
import { SlicesNames } from "../slices-names";

export const GlobalUISlice = createSlice({
    name: SlicesNames.GLOBAL_UI,
    initialState: {
        initialRoute: ScreenNames.WELCOME_ON_BOARDING
    },
    reducers: {

    }
})

//views
export const getInitialRoute = (state: AppStore) => {
    let initialRoute = ScreenNames.WELCOME_ON_BOARDING
    const userIsLogin = state[SlicesNames.AUTH].isLogin
    const userHasInterests = state[SlicesNames.USER].interests?.length > 0
    if( userIsLogin && userHasInterests ) {
        if(userHasInterests) initialRoute = ScreenNames.HOME
        else initialRoute = ScreenNames.INTERESTS_ON_BOARDING
    }
    return initialRoute
}

export default GlobalUISlice.reducer