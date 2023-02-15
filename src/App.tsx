import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { userSlice } from './redux/reducers/UserSlice'
import { useEffect } from 'react';
import { fetchUsersThunk } from './redux/reducers/ActionCreators';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

function App() {
	// const dispatch = useAppDispatch();
	// const { users, isLoading, error } = useAppSelector(state => state.userReducer);

	// useEffect(() => {
	// 	dispatch(fetchUsersThunk());
	// }, []);

	return (
		<div className="App">
			{/* { isLoading && <h1>Загрузка...</h1>}
			{ error && <h1>Ошибка</h1>}
			{ JSON.stringify(users, null, 2) } */}
			<PostContainer />
			<PostContainer2 />
		</div>
	);
}

export default App;
