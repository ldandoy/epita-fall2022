import axios from './axios';

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

export const getMe = async (token) => {
    try {
        return await axios.get('/auth/me', {
            headers: { Authorization: token }
        });
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