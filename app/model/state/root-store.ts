import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { SlicesNames } from "./slices-names";
import UserSliceReducer from "./user/user-slice";
import SearchArticleSliceReducer from "./ui-slices/search-article-slice"
import AuthSliceReducer from "./auth-slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist"
import CryptoTransform from "../../util/store-transformations";

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	whitelist: [ SlicesNames.AUTH, SlicesNames.USER ], //persist only this
	transforms: [ CryptoTransform ],
}

const appReducers: Reducer = combineReducers({
    [SlicesNames.USER]: UserSliceReducer,
	[SlicesNames.AUTH]: AuthSliceReducer,
	[SlicesNames.SEARCH_ARTICLE]: SearchArticleSliceReducer
})

export const rootStore = configureStore({
    reducer: persistReducer(persistConfig, appReducers),
    middleware: (getDefaultMiddleware) => (
		getDefaultMiddleware({
			serializableCheck: false
		})
	)
})

export type AppStore = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const persistor = persistStore(rootStore)

export default rootStore