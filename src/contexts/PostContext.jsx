import axios from "../config/axios";
import React, { createContext, useState } from "react";

export const PostContext = createContext();

function PostContextProvider({ children }) {
  // States
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);
  const [postsOnProfilePage, setPostsOnProfilePage] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // fn
  const post = () => {
    const formData = new FormData();
    if (imgFile) {
      formData.append("img", imgFile);
    }
    formData.append("text", JSON.stringify(postText));
    return formData;
  };
  const handleLike = async (postId) => {
    try {
      await axios.post(`post/like/${postId}`);
    } catch (err) {
      console.log(err);
    }
  };

  const sharedContexts = {
    postText,
    setPostText,
    posts,
    setPosts,
    post,
    postsOnProfilePage,
    setPostsOnProfilePage,
    imgFile,
    setImgFile,
    isLoading,
    setIsLoading,
    handleLike,
  };
  return (
    <PostContext.Provider value={sharedContexts}>
      {children}
    </PostContext.Provider>
  );
}

export default PostContextProvider;
