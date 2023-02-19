import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import countReducer from "./reducers/CountSlise";

const rootReducer = combineReducers({
	userReducer,
	countReducer
})

export const setUpStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']
