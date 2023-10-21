import React, { useContext } from "react";
import Post from "../home/Post";
import { PostContext } from "../../contexts/PostContext";
// import { useParams } from "react-router-dom";
import axios from "../../config/axios";

function PostList() {
  const { posts, handleLike } = useContext(PostContext);
  // console.log(posts);
  //

  // console.log(posts, "commetn");
  return (
    <div>
      {posts.map((x) => {
        // console.log(x, "post");
        return (
          <Post
            key={x.id}
            firstName={x.user.firstName}
            lastName={x.user.lastName}
            username={x.user.username}
            profileImg={x.user.profileImg}
            contentText={x.contentText}
            contentImg={x.contentImg}
            userId={x.userId}
            postId={x.id}
            comments={x?.Comments}
            likes={x?.PostLikes}
            createdAt={x.createdAt}
          />
        );
      })}
    </div>
  );
}

export default PostList;
