import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import authReducer from './slices/authSlice'
import {todoRtkApi} from './services/todos-rtk'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [todoRtkApi.reducerPath]: todoRtkApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoRtkApi.middleware),
})

setupListeners(store.dispatch)