import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const OpenRoute = ({ children }) => {
  const { state } = useAuth();
  return !state.isAuthenticated ? children : <Navigate to="/" />;
};

export default OpenRoute;
