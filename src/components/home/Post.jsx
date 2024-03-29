import React, { useContext, useEffect, useRef, useState } from "react";
import Avatar from "../global/Avatar";
import { Context } from "../../contexts/Context";
import { BsChat, BsFillHeartFill, BsHeart, BsThreeDots } from "react-icons/bs";
import DropDown from "../global/DropDown";
import { Link, useParams } from "react-router-dom";
import Modal from "../global/Modal";
import { HomeContext } from "../../contexts/HomeContext";
import ConfirmDelete from "../post/ConfirmDelete";
import axios from "../../config/axios";
import { format } from "timeago.js";
import { PostContext } from "../../contexts/PostContext";

function Post({
  firstName,
  lastName,
  username,
  profileImg,
  contentText,
  contentImg,
  userId,
  postId,
  createdAt,
  comments,
  likes,
}) {
  //
  const { authUser } = useContext(Context);
  const { isOpenDelete, setIsOpenDelete, setPostIdState } =
    useContext(HomeContext);
  // States
  const [allLikes, setAllLikes] = useState(likes);
  const [img, setImg] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  //
  const handleDropdown = () => {
    setIsOpen(!isOpen);
    setPostIdState(postId);
  };
  useEffect(() => {
    const getLikes = async () => {
      try {
        const res = await axios.get(`/post/getlikes/${postId}`);
        setAllLikes(res.data);
        if (allLikes.find((x) => x.likedById === authUser.id)) {
        }
      } catch (err) {
        console.log(err);
      }
    };
    getLikes();
  }, []);

  const handleLike = async () => {
    try {
      await axios.post(`post/like/${postId}`);
      if (!isLiked) {
        setAllLikes((prev) => [
          { postId: postId, likedById: authUser.id },
          ...prev,
        ]);
        return;
      }
      setAllLikes(allLikes.filter((x) => x.likedById !== authUser.id));
    } catch (err) {
      console.log(err);
    }
  };
  const isLiked = allLikes && allLikes.find((x) => x.likedById === authUser.id);
  const dropDown = useRef(null);
  const handleClickOutside = (e) => {
    if (isOpen && !dropDown.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };
  document.addEventListener("click", handleClickOutside);

  return (
    <>
      <div
        id="container"
        className=" flex flex-col px-4 py-2 border border-border relative pt-3 hover:bg-gray-800/[.2] first-line:z-0"
      >
        {userId === authUser.id && (
          <>
            <div
              className=" text-fade p-2 hover:bg-fade/[.3] rounded-full cursor-pointer absolute right-3 top-2"
              onClick={handleDropdown}
              ref={dropDown}
            >
              <BsThreeDots />
            </div>
          </>
        )}
        <div className="flex h-fit gap-4">
          <Link to={`/profile/${userId}`}>
            <Avatar
              src={profileImg}
              size={
                "min-h-[2.8rem] max-h-[2.8rem] max-w-[2.8rem] min-w-[2.8rem]"
              }
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
                <p className="text-[#707070] text-sm font-semibold mt-[.1rem] hover:underline">
                  @{username}
                </p>
              </Link>
              <span className="block text-fade text-sm mt-[.1rem]">
                {format(createdAt)}
              </span>
            </div>
            <p className="max-w-[30rem] text-[.9rem] break-words">
              {contentText}
            </p>
            {contentImg && (
              <div className="flex justify-center border border-border w-[30rem] rounded-lg cursor-pointer">
                <img
                  src={contentImg}
                  alt=""
                  className="object-contain  max-h-[20rem]"
                />
              </div>
            )}
            <div className="flex gap-16">
              <div className="flex items-center gap-1 text-fade hover:text-main cursor-pointer ">
                <Link to={`/post/${postId}`}>
                  <div className="hover:bg-main/[.3] rounded-full p-2">
                    <BsChat />
                  </div>
                </Link>
                <span className="text-sm font-light">{comments?.length}</span>
              </div>
              <div className="flex items-center gap-1 text-fade hover:text-red-500 cursor-pointer rounded-full">
                <div className="p-2 hover:bg-red-500/[.3] rounded-full">
                  {isLiked ? (
                    <div className="text-red-500">
                      <BsFillHeartFill onClick={handleLike} />
                    </div>
                  ) : (
                    <BsHeart onClick={handleLike} />
                  )}
                </div>
                <span
                  className={`text-sm font-light ${isLiked && "text-red-500"}`}
                >
                  {allLikes?.length}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* DropDown */}
        {isOpen && (
          <DropDown
            onClick={() => setIsOpenDelete(true)}
            onClose={() => setIsOpenDelete(false)}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </>
  );
}

export default Post;
