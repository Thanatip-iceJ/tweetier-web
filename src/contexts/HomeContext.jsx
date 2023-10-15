import React, { createContext, useState } from "react";
import { removeAccessToken } from "../utils/local-storage";

export const HomeContext = createContext();

function HomeContextProvider({ children }) {
  // States
  const [isShowMore, setIsShotMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sharedContexts = {
    isShowMore,
    setIsShotMore,
    isOpen,
    setIsOpen,
  };
  return (
    <HomeContext.Provider value={sharedContexts}>
      {children}
    </HomeContext.Provider>
  );
}

export default HomeContextProvider;
