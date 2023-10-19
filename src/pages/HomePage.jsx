import React, { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/Context";
import PageTitle from "../components/home/PageTitle";
import PostSomething from "../components/home/PostSomething";
import PostList from "../components/post/PostList";
import { PostContext } from "../contexts/PostContext";
import axios from "../config/axios";
import Loading from "../assets/Loading";
import { HomeContext } from "../contexts/HomeContext";

function HomePage() {
  //
  const { setPosts, posts } = useContext(PostContext);
  const [isLoading, setIsLoading] = useState(true);
  const { setIsOpenLogout } = useContext(HomeContext);
  //
  useEffect(() => {
    setIsOpenLogout(false);
    axios
      .get("/post/getposts")
      .then((res) => setPosts(res.data))
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loading />;
  return (
    <>
      <div className="text-white border border-border min-h-[100vh] z-0">
        <PageTitle title="Home" />
        <PostSomething />
        <PostList />
      </div>
    </>
  );
}

export default HomePage;
