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
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   console.log("hi");
  //   setLoading(true);
  //   axios
  //     .get(`post/getpostbyid/${postId}`)
  //     .then((res) => {
  //       setPost("resssss", res.data);
  //     })
  //     .catch(console.log)
  //     .finally(() => setLoading(false));
  // }, []);
  useEffect(() => {
    console.log("first");
    const asym = async () => {
      try {
        const post = await axios.get(`/post/getpostbyid/${postId}`);
        setPost(post.data);
        const res = await axios.get(`/post/getcomments/${postId}`);
        console.log(res.data);
        setComments([...res.data]);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    asym();
  }, []);
  console.log(post);

  if (loading) return <Loading />;
  return (
    <div className="text-white min-h-[100vh] border border-border">
      <PageTitle title="Post" icon={<BsArrowLeft size="1.5rem" />} to="/" />

      <div>
        <Post
          firstName={post?.user?.firstName}
          lastName={post?.user?.lastName}
          username={post?.user?.username}
          contentText={post?.contentText}
          contentImg={post?.contentImg}
          profileImg={post?.user?.profileImg}
          comments={post?.Comments}
          likes={post?.PostLikes}
          postId={post?.id}
          createdAt={post.createdAt}
        />
      </div>
      <CommentSomething />
      <CommentList />
    </div>
  );
}

export default PostPage;
