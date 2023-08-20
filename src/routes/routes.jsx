import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AuthRoute from '../utils/AuthRoute';
import PrivateRoute from '../utils/PrivateRoute';
import NotFound from '../utils/NotFound';
import MainPage from '../component/MainPage';

function routes() {
  return (
    <div>
      <Routes>
      <Route path="*" element={<NotFound />} />
        <Route path="" element={<AuthRoute />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<MainPage />} />
          <Route path="/deals" element={<MainPage />} />
          <Route path="/transactions" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default routes;
