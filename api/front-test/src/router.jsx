import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Animals from './pages/Animals';
import Contact from './pages/Contact';
import Register from './pages/Register';

import Default from './layout/Default';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Default>
              <Home />
            </Default> } />
            <Route path="/animals" element={<Default>
              <Animals />
            </Default>} />
            <Route path="/contact" element={<Default>
              <Contact />
            </Default>} />
            <Route path="/register" element={<Default>
              <Register />
            </Default>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
