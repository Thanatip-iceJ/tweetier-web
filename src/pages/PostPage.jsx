import React from "react";
import PageTitle from "../components/home/PageTitle";
import Post from "../components/home/Post";
import CommentSomething from "../components/post/CommentSomething";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function PostPage() {
  return (
    <div className="text-white min-h-[100vh] border border-border">
      <PageTitle title="Post" icon={<BsArrowLeft size="1.5rem" />} to="/" />

      <div>
        <Post />
      </div>
      <CommentSomething />
    </div>
  );
}

export default PostPage;
