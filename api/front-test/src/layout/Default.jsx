import React from 'react';
import {Link} from 'react-router-dom'

const Default = ({ children }) => {
  return (
    <div id="default">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/animals">Animals</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/register">Register</Link>
      </nav>
      <div className='container'>
        {children}
      </div>
    </div>
  )
}

export default Default;
