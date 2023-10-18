import React, { useEffect } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import {
  createAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import { useState } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  //States
  const [authUser, setAuthUser] = useState(null);

  const [loading, setLoading] = useState(true);
  // console.log(authUser);

  const testLoading = (bool) => {
    setLoading(bool);
  };

  useEffect(() => {
    console.log("work");
    if (getAccessToken()) {
      axios
        .get("/auth/getauthuser")
        .then((res) => setAuthUser(res.data.user))
        .finally(() => {
          // console.log("first");
          setLoading(false);
        });
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

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  const sharedContexts = {
    testLoading,
    register,
    authUser,
    login,
    loading,
    setLoading,
    logout,
  };
  return <Context.Provider value={sharedContexts}>{children}</Context.Provider>;
}

export default ContextProvider;
