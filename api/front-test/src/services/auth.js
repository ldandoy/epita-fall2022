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