import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
// 	try {
// 		dispatch(userSlice.actions.usersFetching())
// 		const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
// 		dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//
// 	} catch (error: unknown) {
// 		dispatch(userSlice.actions.usersFetchingError((error as Error).message))
// 	}
// }

export const fetchUsers = createAsyncThunk(
	'users/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
			return response.data
		} catch (e: unknown) {
			return thunkAPI.rejectWithValue((e as Error).message)
		}

	}
)
