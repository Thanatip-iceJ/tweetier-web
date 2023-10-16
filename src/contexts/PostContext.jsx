import axios from "../config/axios";
import React, { createContext, useState } from "react";

export const PostContext = createContext();

function PostContextProvider({ children }) {
  // States
  const [postText, setPostText] = useState("");

  // fn
  const post = (data) => {
    return axios.post("/post/createpost", { message: data });
  };

  const sharedContexts = { postText, setPostText, post };
  return (
    <PostContext.Provider value={sharedContexts}>
      {children}
    </PostContext.Provider>
  );
}

export default PostContextProvider;
