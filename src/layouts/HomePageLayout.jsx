import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/home/sidebar";
import SuggestionBar from "../components/home/SuggestionBar";
import HomeContextProvider, { HomeContext } from "../contexts/HomeContext";
import LogoutConfirm from "../components/home/LogoutConfirm";
import Modal from "../components/global/Modal";
import PostSomething from "../components/home/PostSomething";
import ConfirmDelete from "../components/post/ConfirmDelete";
import { CommentContext } from "../contexts/CommentContext";
import axios from "../config/axios";
import { PostContext } from "../contexts/PostContext";

function HomePageLayout() {
  const {
    isOpenLogout,
    setIsOpenLogout,
    isOpenPost,
    setIsOpenPost,
    isOpenDelete,
    setIsOpenDelete,
    postIdState,
  } = useContext(HomeContext);
  const {
    isOpenDeleteComment,
    setIsOpenDeleteComment,
    deleteComment,
    commentId,
  } = useContext(CommentContext);
  const {
    posts,
    setPosts,
    setPostById,
    setPostsOnProfilePage,
    postsOnProfilePage,
  } = useContext(PostContext);
  console.log(postIdState);

  console.log(postIdState);
  const deletePostHandle = async () => {
    try {
      await axios.delete(`/post/delete/${postIdState}`);
      setPosts(posts.filter((x) => x.id !== postIdState));
      setPostById(null);
      setPostsOnProfilePage(
        postsOnProfilePage.filter((x) => x.id !== postIdState)
      );
    } catch (err) {
      console.log(err);
    } finally {
      setIsOpenDelete(false);
    }
  };

  return (
    <>
      <div className="bg-[#111111] w-full min-h-[100vh] h-fit">
        <div
          id="container"
          className="min-w-[60vw] mx-auto sm:max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl grid grid-cols-4"
        >
          <div className="">
            <Sidebar />
          </div>
          <div className="col-span-2">
            <Outlet />
          </div>
          <div className="">
            <SuggestionBar />
          </div>
        </div>
      </div>
      <Modal
        title="Are you sure you want you logout?"
        isOpen={isOpenLogout}
        onClose={() => setIsOpenLogout(false)}
      >
        <LogoutConfirm onClose={() => setIsOpenLogout(false)} />
      </Modal>
      <Modal
        title="Post something"
        isOpen={isOpenPost}
        onClose={() => setIsOpenPost(false)}
      >
        <PostSomething border="border-none" />
      </Modal>
      <Modal
        title="Do you want to delete this post?"
        isOpen={isOpenDelete}
        onClose={() => setIsOpenDelete(false)}
      >
        <ConfirmDelete
          yes={deletePostHandle}
          no={() => setIsOpenDelete(false)}
        />
      </Modal>
      <Modal
        title="Do you want to delete this comment?"
        isOpen={isOpenDeleteComment}
        onClose={() => setIsOpenDeleteComment(false)}
      >
        <ConfirmDelete
          yes={deleteComment}
          no={() => setIsOpenDeleteComment(false)}
        />
      </Modal>
    </>
  );
}

export default HomePageLayout;
