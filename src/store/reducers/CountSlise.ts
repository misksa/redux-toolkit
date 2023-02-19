import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CountState {
	count: number
}

const initialState: CountState = {
	count: 0
}

export const CountSlice = createSlice({
	name: 'count',
	initialState,
	reducers: {
		increment(state, action: PayloadAction<number>) {
			state.count += action.payload
		},
		decrement(state, action: PayloadAction<number>) {
			state.count -= action.payload
		}
	}
})


export default CountSlice.reducer