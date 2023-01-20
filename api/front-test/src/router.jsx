import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Todos from "./pages/Todos";
import TodosRTK from "./pages/TodosRTK";

import Default from "./layout/Default";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Default>
              <Home />
            </Default>
          }
        />
        <Route
          path='/animals'
          element={
            <Default privated={true}>
              <Animals />
            </Default>
          }
        />
        <Route
          path='/contact'
          element={
            <Default>
              <Contact />
            </Default>
          }
        />
        <Route
          path='/todos'
          element={
            <Default privated={true}>
              <Todos />
            </Default>
          }
        />
        <Route
          path='/todos-rtk'
          element={
            <Default privated={true}>
              <TodosRTK />
            </Default>
          }
        />
        <Route
          path='/register'
          element={
            <Default>
              <Register />
            </Default>
          }
        />
        <Route
          path='/login'
          element={
            <Default>
              <Login />
            </Default>
          }
        />
        <Route
          path='/logout'
          element={
            <Default>
              <Logout />
            </Default>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
