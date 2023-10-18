import React, { useContext, useEffect, useState } from "react";
import PageTitle from "../components/home/PageTitle";
import Post from "../components/home/Post";
import CommentSomething from "../components/post/CommentSomething";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import axios from "../config/axios";
import { Context } from "../contexts/Context";

function PostPage() {
  const { postId } = useParams();
  //
  //
  const [post, setPost] = useState(null);
  console.log(post);
  useEffect(() => {
    axios
      .get(`post/getpostbyid/${postId}`)
      .then((res) => setPost(res.data))
      .catch(console.log);
  }, []);
  return (
    <div className="text-white min-h-[100vh] border border-border">
      <PageTitle title="Post" icon={<BsArrowLeft size="1.5rem" />} to="/" />

      <div>
        <Post
          firstName={post?.user.firstName}
          lastName={post?.user.lastName}
          username={post?.user.username}
          contentText={post?.contentText}
          contentImg={post?.contentImg}
        />
      </div>
      <CommentSomething />
    </div>
  );
}

export default PostPage;
