import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { SlicesNames } from "./slices-names";
import UserSliceReducer from "./user/user-slice";
import SearchArticleSliceReducer from "./ui-slices/search-article-slice"
import AuthSliceReducer from "./auth-slice";

const appReducers = combineReducers({
    [SlicesNames.USER]: UserSliceReducer,
	[SlicesNames.AUTH]: AuthSliceReducer,
	[SlicesNames.SEARCH_ARTICLE]: SearchArticleSliceReducer
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