import React, { createContext, useContext, useState } from "react";
import axios from "../config/axios";
import { Context } from "./Context";

export const CommentContext = createContext();

function CommentContextProvider({ children }) {
  //
  const { authUser } = useContext(Context);
  const [comments, setComments] = useState([]);
  const [commentId, setCommentId] = useState(0);
  const [commentLength, setCommentLength] = useState(+"");
  const [isOpenDeleteComment, setIsOpenDeleteComment] = useState(false);
  const deleteComment = async () => {
    try {
      await axios.delete(`/post/deletecomment/${commentId}`);
      setComments(comments.filter((x) => x.id !== commentId));
      setIsOpenDeleteComment(false);
    } catch (err) {
      console.log(err);
    }
  };
  //
  const sharedContexts = {
    comments,
    setComments,
    commentLength,
    setCommentLength,
    isOpenDeleteComment,
    setIsOpenDeleteComment,
    deleteComment,
    commentId,
    setCommentId,
  };
  return (
    <CommentContext.Provider value={sharedContexts}>
      {children}
    </CommentContext.Provider>
  );
}

export default CommentContextProvider;
