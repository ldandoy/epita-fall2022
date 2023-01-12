import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import { getMe } from '../services/auth';
import {setAuth} from '../slices/authSlice';

const Default = ({ children }) => {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  const {isAuth} = useSelector((state) => state.auth);
  
  useEffect(() => {
    const getData = async () => {
      let token = localStorage.getItem('token');
      const res = await getMe(token);
      dispatch(setAuth(res.data))
    };

    getData();
  }, []);

  return (
    <div id="default">
      <nav>
        <Link to="/">Home</Link>
        {isAuth && <>
          <Link to="/animals">Animals</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/logout">Logout</Link>
        </>}
        {!isAuth && <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>}
      </nav>
      <div className='container'>
        {children}
      </div>
    </div>
  )
}

export default Default;
