import React, { createContext, useState } from "react";

export const HomeContext = createContext();

function HomeContextProvider({ children }) {
  // States
  const [isShowMore, setIsShowMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isOpenProfileEdit, setIsOpenProfileEdit] = useState(false);
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [postIdState, setPostIdState] = useState(0);
  const [users, setUsers] = useState([]);
  const [postModalLoading, setPostModalLoading] = useState(false);
  // fn
  // console.log(postIdState);
  const sharedContexts = {
    isShowMore,
    setIsShowMore,
    isOpen,
    setIsOpen,
    isOpenLogout,
    setIsOpenLogout,
    isOpenProfileEdit,
    setIsOpenProfileEdit,
    isOpenPost,
    setIsOpenPost,
    isOpenDelete,
    setIsOpenDelete,
    postIdState,
    setPostIdState,
    users,
    setUsers,
    postModalLoading,
    setPostModalLoading,
  };
  return (
    <HomeContext.Provider value={sharedContexts}>
      {children}
    </HomeContext.Provider>
  );
}

export default HomeContextProvider;
