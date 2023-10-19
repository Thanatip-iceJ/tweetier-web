import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/home/sidebar";
import SuggestionBar from "../components/home/SuggestionBar";
import HomeContextProvider, { HomeContext } from "../contexts/HomeContext";
import LogoutConfirm from "../components/home/LogoutConfirm";
import Modal from "../components/global/Modal";
import PostSomething from "../components/home/PostSomething";
import ConfirmDelete from "../components/post/ConfirmDelete";

function HomePageLayout() {
  const {
    isOpenLogout,
    setIsOpenLogout,
    isOpenPost,
    setIsOpenPost,
    isOpenDelete,
    setIsOpenDelete,
  } = useContext(HomeContext);

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
        <ConfirmDelete />
      </Modal>
    </>
  );
}

export default HomePageLayout;
