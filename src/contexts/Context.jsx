import React from "react";
import { createContext } from "react";
import axios from "../config/axios";
import { createAccessToken } from "../utils/local-storage";
import { useState } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  //States
  const [authUser, setAuthUser] = useState(
    localStorage.getItem("ACCESS_TOKEN")
  );
  console.log(authUser);
  //fn
  const register = async (body) => {
    const res = await axios.post("/auth/register", body);
    console.log(res);
    createAccessToken(res.data.token);
    setAuthUser(res.data.user);
  };

  const sharedContexts = { register, authUser };
  return <Context.Provider value={sharedContexts}>{children}</Context.Provider>;
}

export default ContextProvider;
