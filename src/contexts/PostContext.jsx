import axios from "../config/axios";
import React, { createContext, useContext, useState } from "react";

export const PostContext = createContext();

function PostContextProvider({ children }) {
  // States
  const [postText, setPostText] = useState({ postContent: "" });
  const [posts, setPosts] = useState([]);
  const [postById, setPostById] = useState(null);
  const [postsOnProfilePage, setPostsOnProfilePage] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [allLikes, setAllLikes] = useState([]);
  console.log("allLikes", allLikes);

  // fn
  const post = () => {
    const formData = new FormData();
    if (imgFile) {
      formData.append("img", imgFile);
    }
    formData.append("text", JSON.stringify(postText.postContent));
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
    isLiked,
    setIsLiked,
    allLikes,
    setAllLikes,
    postById,
    setPostById,
  };
  return (
    <PostContext.Provider value={sharedContexts}>
      {children}
    </PostContext.Provider>
  );
}

export default PostContextProvider;
