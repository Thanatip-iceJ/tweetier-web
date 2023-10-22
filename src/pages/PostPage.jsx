import React, { useContext, useEffect, useState } from "react";
import PageTitle from "../components/home/PageTitle";
import Post from "../components/home/Post";
import CommentSomething from "../components/post/CommentSomething";
import { BsArrowLeft } from "react-icons/bs";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "../config/axios";
import { Context } from "../contexts/Context";
import CommentList from "../components/post/CommentList";
import Loading from "../assets/Loading";
import { CommentContext } from "../contexts/CommentContext";
import { PostContext } from "../contexts/PostContext";
import HomePage from "./HomePage";

function PostPage() {
  const { postId } = useParams();
  //
  const { comments, setComments } = useContext(CommentContext);
  const { posts } = useContext(PostContext);
  //
  const { postById, setPostById } = useContext(PostContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const asym = async () => {
      try {
        const post = await axios.get(`/post/getpostbyid/${postId}`);
        setPostById(post.data);
        const res = await axios.get(`/post/getcomments/${postId}`);
        setComments(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    asym();
  }, []);

  if (loading) return <Loading />;
  if (!postById) return <HomePage />;
  return (
    <div className="text-white min-h-[100vh] border border-border">
      <PageTitle title="Post" icon={<BsArrowLeft size="1.5rem" />} to="/" />

      <div>
        <Post
          firstName={postById?.user?.firstName}
          lastName={postById?.user?.lastName}
          username={postById?.user?.username}
          contentText={postById?.contentText}
          contentImg={postById?.contentImg}
          profileImg={postById?.user?.profileImg}
          comments={postById?.Comments}
          likes={postById?.PostLikes}
          postId={postById.id}
          userId={postById?.userId}
          createdAt={postById.createdAt}
        />
      </div>
      <CommentSomething />
      <CommentList />
    </div>
  );
}

export default PostPage;
