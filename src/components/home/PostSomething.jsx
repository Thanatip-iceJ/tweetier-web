import React, { useState } from "react";
import Avatar from "../global/Avatar";
import { BsFillImageFill } from "react-icons/bs";

function PostSomething() {
  const [postText, setPostText] = useState("");

  return (
    <div className="border border-border pb-3">
      <div id="flexbox" className="flex pl-4 pt-4">
        <div id="avatar min-w-[2.5rem]">
          <Avatar />
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
    </div>
  );
}

export default PostSomething;
