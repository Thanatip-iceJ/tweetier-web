import React, { useContext, useEffect, useState } from "react";
import PageTitle from "../components/home/PageTitle";
import Post from "../components/home/Post";
import CommentSomething from "../components/post/CommentSomething";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import axios from "../config/axios";
import { Context } from "../contexts/Context";
import CommentList from "../components/post/CommentList";
import Loading from "../assets/Loading";
import { CommentContext } from "../contexts/CommentContext";

function PostPage() {
  const { postId } = useParams();
  //
  const { comments, setComments } = useContext(CommentContext);
  //
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(comments);
    setLoading(true);
    axios
      .get(`post/getpostbyid/${postId}`)
      .then((res) => setPost(res.data))
      .catch(console.log)
      .finally(() => setLoading(false));
    axios
      .get(`/post/getcomments/${postId}`)
      .then((res) => setComments([...res.data]));
  }, []);

  if (loading) return <Loading />;
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
          profileImg={post?.user.profileImg}
          comments={comments.length}
        />
      </div>
      <CommentSomething />
      <CommentList />
    </div>
  );
}

export default PostPage;
