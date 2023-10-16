import React from "react";
import { useContext } from "react";
import { Context } from "../../contexts/Context";
import { Navigate } from "react-router-dom";

export default function Unauthenticated({ children }) {
  // Context
  const { authUser } = useContext(Context);
  if (!authUser) {
    return <Navigate to="/auth">{children}</Navigate>;
  }
  return children;
}
