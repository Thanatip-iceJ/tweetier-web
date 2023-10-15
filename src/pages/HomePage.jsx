import React, { useContext } from "react";
import { Context } from "../contexts/Context";
import PageTitle from "../components/home/PageTitle";
import PostSomething from "../components/home/PostSomething";
import Post from "../components/home/Post";
import HomeContextProvider from "../contexts/HomeContext";
import Modal from "../components/global/Modal";

function HomePage() {
  const { authUser } = useContext(Context);
  return (
    <>
      <div className="text-white border border-border min-h-[100vh] z-0">
        <PageTitle title="Home" />
        <PostSomething />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}

export default HomePage;
