import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4500';

export const register = async (form) => {
    try {
        return await axios.post('/auth/register', form);
    } catch(error) {
        return error
    }
    
};