import axios from "../config/axios";
import React, { createContext, useState } from "react";

export const PostContext = createContext();

function PostContextProvider({ children }) {
  // States
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);
  const [postsOnProfilePage, setPostsOnProfilePage] = useState([]);

  // fn
  const post = (data) => {
    return axios.post("/post/createpost", { message: data });
  };

  const sharedContexts = {
    postText,
    setPostText,
    posts,
    setPosts,
    post,
    postsOnProfilePage,
    setPostsOnProfilePage,
  };
  return (
    <PostContext.Provider value={sharedContexts}>
      {children}
    </PostContext.Provider>
  );
}

export default PostContextProvider;
