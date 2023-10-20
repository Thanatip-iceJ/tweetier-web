import React, { useContext } from "react";
import Post from "../home/Post";
import { PostContext } from "../../contexts/PostContext";
// import { useParams } from "react-router-dom";
import axios from "../../config/axios";

function PostList() {
  const { posts } = useContext(PostContext);
  console.log(posts);
  //
  const handleLike = async (postId) => {
    try {
      await axios.post(`post/like/${postId}`);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(posts, "commetn");
  return (
    <div>
      {posts.map((x) => {
        console.log(x, "post");
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
            handleLike={() => handleLike(x.id)}
            comments={x?.Comments}
            likes={x?.PostLikes}
          />
        );
      })}
    </div>
  );
}

export default PostList;
