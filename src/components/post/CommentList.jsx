import React, { useContext } from "react";
import Comment from "./Comment";
import { CommentContext } from "../../contexts/CommentContext";

function CommentList() {
  const { comments, setComments } = useContext(CommentContext);
  return (
    <div>
      {comments.map((x) => (
        <Comment
          key={x.id}
          text={x.contentText}
          firstName={x.user.firstName}
          lastName={x.user.lastName}
          username={x.user.username}
          createdAt={x.createdAt}
          profileImg={x.user.profileImg}
        />
      ))}
    </div>
  );
}

export default CommentList;
