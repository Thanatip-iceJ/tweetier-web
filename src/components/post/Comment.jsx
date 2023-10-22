import React, { useContext, useState } from "react";
import { BsThreeDots, BsChat } from "react-icons/bs";
import Avatar from "../global/Avatar";
import { Context } from "../../contexts/Context";
import { Link } from "react-router-dom";
import DropDown from "../global/DropDown";
import { CommentContext } from "../../contexts/CommentContext";
import { format } from "timeago.js";

function Comment({
  text,
  firstName,
  lastName,
  username,
  createdAt,
  profileImg,
  userId,
  id,
}) {
  const { authUser } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const { setIsOpenDeleteComment, setCommentId, commentId } =
    useContext(CommentContext);

  return (
    <div
      id="container"
      className=" flex flex-col px-4 py-2 border border-border relative pt-3 hover:bg-gray-800/[.2] first-line:z-0"
    >
      {authUser.id === userId && (
        <div
          className=" text-fade p-2 hover:bg-fade/[.3] rounded-full cursor-pointer absolute right-3 top-2"
          onClick={() => {
            setIsOpen(!isOpen);
            setCommentId(id);
            console.log(commentId);
          }}
        >
          <BsThreeDots />
        </div>
      )}
      <div className="flex gap-4">
        <Link to={`/profile/${userId}`}>
          <Avatar
            src={profileImg}
            size="min-w-[2.5rem] max-w-[2.5rem] min-h-[2.5rem] max-h-[2.5rem]"
          />
        </Link>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1.5">
            <Link to={`/profile/${userId}`}>
              <p className="text-white font-semibold cursor-pointer hover:underline">
                {firstName} {lastName}
              </p>
            </Link>
            <Link to={`/profile/${userId}`}>
              <p className="text-[#707070] text-sm font-semibold mt-[.1rem] cursor-pointer hover:underline">
                @{username}
              </p>
            </Link>
            <span className="block text-fade text-sm mt-[.1rem]">
              {format(createdAt)}
            </span>
          </div>
          <p className="max-w-[30rem] text-[.9rem] break-words">{text}</p>
          <div className="flex gap-16 mt-2"></div>
        </div>
        {/* DropDown */}
        {isOpen && (
          <DropDown
            onClick={() => {
              setIsOpenDeleteComment(true);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Comment;
