import React, { useEffect } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import { createAccessToken, getAccessToken } from "../utils/local-storage";
import { useState } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  //States
  const [authUser, setAuthUser] = useState(null);
  console.log(authUser);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      // console.log("hh");
      axios
        .get("/auth/getauthuser")
        .then((res) => setAuthUser(res.data.user))
        .finally(setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);
  //fn
  const register = async (body) => {
    const res = await axios.post("/auth/register", body);
    console.log(res);
    createAccessToken(res.data.token);
    setAuthUser(res.data.user);
  };

  const login = async (body) => {
    const res = await axios.post("/auth/login", body);
    createAccessToken(res.data.token);
    setAuthUser(res.data.user);
  };

  const sharedContexts = { register, authUser, login, loading };
  return <Context.Provider value={sharedContexts}>{children}</Context.Provider>;
}

export default ContextProvider;
