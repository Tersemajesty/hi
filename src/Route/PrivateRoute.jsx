import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const myToken = localStorage.getItem("token");

  return <>{myToken ? <Outlet /> : <Navigate to="/login" replace />}</>;
};

export default PrivateRoute;
