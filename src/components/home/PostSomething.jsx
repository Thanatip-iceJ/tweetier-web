import React, { useContext, useState } from "react";
import Avatar from "../global/Avatar";
import { BsFillImageFill } from "react-icons/bs";
import { PostContext } from "../../contexts/PostContext";
import { toast } from "react-toastify";
import { Context } from "../../contexts/Context";

function PostSomething({ border = "border border-border" }) {
  const { postText, setPostText, post } = useContext(PostContext);
  const { authUser } = useContext(Context);
  //
  const submitHandle = (e) => {
    e.preventDefault();
    post(postText)
      .then((res) => {
        setPostText("");
        toast.success(res.data.message);
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <form className={`${border} pb-3`} onSubmit={submitHandle}>
      <div id="flexbox" className="flex pl-4 pt-4">
        <div id="avatar min-w-[2.5rem]">
          <Avatar src={authUser.profileImg} />
        </div>
        <div>
          <textarea
            name=""
            id=""
            cols="50"
            rows="2"
            placeholder="What's happening?"
            className="bg-transparent outline-none resize-none px-4 pt-2 h-fit "
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div id="flexbox-2" className="pl-16 flex justify-between pr-8">
        <div
          id="icon"
          className="text-main hover:bg-main/[.3] w-fit rounded-full cursor-pointer p-2 transition-all duration-200"
        >
          <BsFillImageFill />
        </div>
        <button className="bg-main rounded-2xl px-4 font-bold hover:bg-blue-500 transition-all duration-200">
          Post
        </button>
      </div>
    </form>
  );
}

export default PostSomething;
