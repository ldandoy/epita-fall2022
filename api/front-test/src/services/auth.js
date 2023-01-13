import axios from 'axios';
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'

import {setAuth} from '../slices/authSlice';
import {store} from '../store';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

const ax = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

ax.interceptors.request.use(async (request) => {
    try {
        const token = request.headers.Authorization
        console.log('token:', token)
        let decode = (token !== null && token !== "undefined" && typeof token !== "undefined") ? jwt_decode(token) : null

        if (decode) {
            console.log("expire: ", decode.exp, dayjs.unix(decode.exp).diff(dayjs()))

            if (dayjs.unix(decode.exp).diff(dayjs()) > 1) {
                console.log('no refresh')
                
                return request
            } else {
                console.log('refresh')
                const response = await axios.get(`/auth/refresh-token`);
                console.log(response)
                
                request.headers.Authorization = response.data.token
                localStorage.setItem('token', response.data.token)
                store.dispatch(setAuth(response.data))
                return request
            }
        } else {
            console.log('no token')
            return request
        }
    } catch(error) {
        console.log(error)
    }
});

export const register = async (form) => {
    try {
        return await ax.post('/auth/register', form);
    } catch(error) {
        return error
    }
};

export const login = async (form) => {
    try {
        return await ax.post('/auth/login', form);
    } catch(error) {
        return error
    }
}

export const getMe = async (token) => {
    try {
        return await ax.get('/auth/me', {
            headers: { Authorization: token }
        });
    } catch(error) {
        return error.response
    }
}

export const logout = async () => {
    try {
        return await ax.delete('/auth/logout');
    } catch(error) {
        return error.response
    }
}