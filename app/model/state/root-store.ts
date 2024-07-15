import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import UserSliceReducer from "./user/user-slice";
import { SlicesNames } from "./slices-names";

const appReducers = combineReducers({
    [SlicesNames.USER]: UserSliceReducer
})

export const rootStore = configureStore({
    reducer: appReducers,
    middleware: (getDefaultMiddleware) => (
		getDefaultMiddleware({
			serializableCheck: false
		})
	)
})

export type AppStore = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default rootStore