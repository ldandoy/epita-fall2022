import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

export const register = async (form) => {
    try {
        return await axios.post('/auth/register', form);
    } catch(error) {
        return error
    }
};

export const login = async (form) => {
    try {
        return await axios.post('/auth/login', form);
    } catch(error) {
        return error
    }
}

export const getMe = async () => {
    try {
        return await axios.get('/auth/me');
    } catch(error) {
        return error.response
    }
}

export const logout = async () => {
    try {
        return await axios.delete('/auth/logout');
    } catch(error) {
        return error.response
    }
}