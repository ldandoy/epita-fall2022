import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        user: null
    },
    reducers: {
        isAuth: (state) => {
            return state.isAuth;
        },
        setAuth: (state, {payload}) => {
            state.isAuth = true;
            state.user = payload;
        }
    }
});

export const { isAuth, setAuth } = authSlice.actions

export default authSlice.reducer