import axios from 'axios';
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'

import {setAuth} from '../slices/authSlice';
import {store} from '../store';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(async (request) => {
    try {
        const token = request.headers.Authorization
        let decode = (token !== null && token !== "undefined" && typeof token !== "undefined") ? jwt_decode(token) : null

        if (decode) {
            if (dayjs.unix(decode.exp).diff(dayjs()) > 1) {
                return request
            } else {
                const response = await axios.get(`/auth/refresh-token`);
                
                request.headers.Authorization = response.data.token
                localStorage.setItem('token', response.data.token)
                store.dispatch(setAuth(response.data))
                return request
            }
        } else {
            return request
        }
    } catch(error) {
        console.log(error)
    }
});

export default axios;