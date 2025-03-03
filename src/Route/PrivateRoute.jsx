// import { Outlet } from "react-router";
// import Login from "../Pages/Login";

// const PrivateRoute = () => {
//     const user = JSON.parse(localStorage.getItem("userData"));
//     return user?.token ? <Outlet /> : <Login />;
// }

// export default PrivateRoute

import  { useState, createContext, } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthContext = createContext();

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
    </AuthContext.Provider>
  );
};

export default PrivateRoute 