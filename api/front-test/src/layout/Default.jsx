import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Default = ({ children }) => {
  const {isAuth} = useSelector((state) => state.auth)
  console.log(isAuth)

  return (
    <div id="default">
      <nav>
        <Link to="/">Home</Link>
        {isAuth && <>
          <Link to="/animals">Animals</Link>
          <Link to="/contact">Contact</Link>
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
