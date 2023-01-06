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
            const res = await logout()

            if (res.status === 503) {
                return navigate('/login');
            }

            dispatch(deleteAuth())

            return navigate('/login');
        }

        getData()
    }, []);
}

export default Logout
