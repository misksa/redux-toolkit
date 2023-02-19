import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";

interface UserState {
	users: IUser[]
	isLoading: boolean
	error: string
}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: '',
}

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		usersFetching(state) {
			state.isLoading = true
		},
		usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
			state.isLoading = false
			state.error = ''
			state.users = action.payload
		},
		usersFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false
			state.error = action.payload
		}
	},
	extraReducers: {
		[fetchUsers.pending.type]: (state) => {
			state.isLoading = true
		},
		[fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
			state.isLoading = false
			state.error = ''
			state.users = action.payload
		},
		[fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	}
})


export default userSlice.reducer;