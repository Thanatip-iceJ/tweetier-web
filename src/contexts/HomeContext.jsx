import React, { createContext, useState } from "react";

export const HomeContext = createContext();

function HomeContextProvider({ children }) {
  // States
  const [isShowMore, setIsShotMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isOpenProfileEdit, setIsOpenProfileEdit] = useState(false);
  const [isOpenPost, setIsOpenPost] = useState(false);
  // fn

  const sharedContexts = {
    isShowMore,
    setIsShotMore,
    isOpen,
    setIsOpen,
    isOpenLogout,
    setIsOpenLogout,
    isOpenProfileEdit,
    setIsOpenProfileEdit,
    isOpenPost,
    setIsOpenPost,
  };
  return (
    <HomeContext.Provider value={sharedContexts}>
      {children}
    </HomeContext.Provider>
  );
}

export default HomeContextProvider;
