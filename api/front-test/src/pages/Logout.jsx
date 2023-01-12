import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

import {logout} from '../services/auth';
import {deleteAuth} from '../slices/authSlice';

const Logout = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()

    useEffect(() => {
        const getData = async () => {
            localStorage.removeItem('token');
            
            dispatch(deleteAuth());

            await logout();
            
            return navigate('/login');
        }

        getData()
    }, []);
}

export default Logout
