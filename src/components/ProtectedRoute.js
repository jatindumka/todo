import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      //   const foundUser = JSON.parse(loggedInUser);
      setUser(true);
    }
  });

  return localStorage.getItem("user") ? <Outlet /> : <Navigate to="/sign-up" />;
};

export default ProtectedRoutes;
