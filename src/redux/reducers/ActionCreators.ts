import axios from "axios"
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store"
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from '@reduxjs/toolkit'

// export const fetchUsers = function () {
//     return async function (dispatch: AppDispatch) {
//         try {
//             dispatch(userSlice.actions.userFetchingStarted());

//             const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

//             dispatch(userSlice.actions.userFetchingSuccess(res.data));
//         } catch (error) {
//             dispatch(userSlice.actions.userFetchingFailed('Ошибка при получении пользователей!'));
//         };
//     };
// };

export const fetchUsersThunk = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('Ошибка при получении пользователей!');
        };
    }
);