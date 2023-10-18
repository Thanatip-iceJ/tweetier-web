import React, { createContext } from "react";
import { useState } from "react";

export const ProfileContext = createContext();

function ProfileContextProvider({ children }) {
  //
  const [userProfile, setUserProfile] = useState(null);
  const [profileImgFile, setProfileImgFile] = useState(null);
  const [coverImgFile, setCoverImgFile] = useState(null);
  const [editInput, setEditInput] = useState({
    firstName: "",
    lastName: "",
    bio: "",
  });
  const [statusWithAuth, setStatusWithAuth] = useState("");
  const editProfile = () => {
    const formData = new FormData();
    if (profileImgFile) {
      formData.append("profileImg", profileImgFile);
    }
    if (coverImgFile) {
      formData.append("coverImg", coverImgFile);
    }
    if (editInput) {
      formData.append("info", editInput);
    }
    return formData;
  };
  const sharedContexts = {
    userProfile,
    setUserProfile,
    statusWithAuth,
    setStatusWithAuth,
    profileImgFile,
    setProfileImgFile,
    coverImgFile,
    setCoverImgFile,
    editInput,
    setEditInput,
    editProfile,
  };
  return (
    <ProfileContext.Provider value={sharedContexts}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileContextProvider;
