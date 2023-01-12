import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        user: null,
        token: null
    },
    reducers: {
        isAuth: (state) => {
            return state.isAuth;
        },
        setAuth: (state, {payload}) => {
            state.isAuth = true;
            state.user = payload.user;
            state.token = payload.token;
        },
        deleteAuth: (state) => {
            state.isAuth = false;
            state.user = null;
            state.token = null;
        }
    }
});

export const { isAuth, setAuth, deleteAuth } = authSlice.actions

export default authSlice.reducer