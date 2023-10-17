import React, { createContext } from "react";
import { useState } from "react";

export const ProfileContext = createContext();

function ProfileContextProvider({ children }) {
  //
  const [userProfile, setUserProfile] = useState(null);
  const [statusWithAuth, setStatusWithAuth] = useState("");

  const sharedContexts = {
    userProfile,
    setUserProfile,
    statusWithAuth,
    setStatusWithAuth,
  };
  return (
    <ProfileContext.Provider value={sharedContexts}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileContextProvider;
