import  { useState, } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); 

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      {isAuthenticated ? <Outlet /> : <Navigate to="/login" replace/>}
    </>
  );
};

export default PrivateRoute 