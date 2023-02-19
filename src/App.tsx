import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {CountSlice} from "./store/reducers/CountSlise";
import {fetchUsers} from "./store/reducers/ActionCreators";

const App = () => {

	const { count } = useAppSelector(state => state.countReducer)
	const { increment, decrement } = CountSlice.actions
	const {users, error, isLoading} = useAppSelector(state => state.userReducer)
	const dispatch = useAppDispatch()

	useEffect(()=> {
		dispatch(fetchUsers())
	}, [])

	return (
		<div>
          	work
			<h1>
				{count}
			</h1>
			<button onClick={() => dispatch(increment(Number(prompt())))}>Increment</button>
			<button onClick={() => dispatch(decrement(Number(prompt())))}>Decrement</button>
			<div>
				{isLoading && <div>Loading...</div>}
				{error && <div>{error}</div>}
				{JSON.stringify(users, null, 2)}
			</div>
		</div>
	);
};

export default App;