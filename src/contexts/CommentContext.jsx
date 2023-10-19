import React, { createContext, useState } from "react";

export const CommentContext = createContext();

function CommentContextProvider({ children }) {
  //
  const [comments, setComments] = useState([]);
  const [commentLength, setCommentLength] = useState(+"");
  //
  const sharedContexts = {
    comments,
    setComments,
    commentLength,
    setCommentLength,
  };
  return (
    <CommentContext.Provider value={sharedContexts}>
      {children}
    </CommentContext.Provider>
  );
}

export default CommentContextProvider;
