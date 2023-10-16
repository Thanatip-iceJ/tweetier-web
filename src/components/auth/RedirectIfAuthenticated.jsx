import React from "react";
import { useContext } from "react";
import { Context } from "../../contexts/Context";
import { Navigate } from "react-router-dom";

function RedirectIfAuthenticated({ children }) {
  const { authUser } = useContext(Context);
  if (authUser) {
    return <Navigate to="/">{children}</Navigate>;
  }
  return children;
}

export default RedirectIfAuthenticated;
