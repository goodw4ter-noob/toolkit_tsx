import { IUser } from "../../models/IUser"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsersThunk } from "./ActionCreators";

export interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    
};

export const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // userFetchingStarted(state) {
        //     state.isLoading = true
        // },
        // userFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false,
        //     state.users = action.payload,
        //     state.error = ''
        // }, 
        // userFetchingFailed(state, action: PayloadAction<string>) {
        //     state.isLoading = false,
        //     state.error = action.payload
        // },
    },
    extraReducers: {
        [fetchUsersThunk.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false,
            state.users = action.payload,
            state.error = ''
        }, 
        [fetchUsersThunk.pending.type]: (state) => {
            state.isLoading = true
        }, 
        [fetchUsersThunk.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false,
            state.error = action.payload
        } 
    },
});

export default userSlice.reducer;