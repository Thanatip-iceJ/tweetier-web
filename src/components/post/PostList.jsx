import React, { useContext } from "react";
import Post from "../home/Post";
import { PostContext } from "../../contexts/PostContext";

function PostList() {
  const { posts } = useContext(PostContext);
  console.log(posts);
  return (
    <div>
      {posts.map((x) => (
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
        />
      ))}
    </div>
  );
}

export default PostList;
