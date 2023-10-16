import React, { useContext } from "react";
import Avatar from "../global/Avatar";
import { HomeContext } from "../../contexts/HomeContext";

function FollowSugProfile({
  firstName,
  lastName,
  username,
  profileImg,
  onClick,
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center py-2 ">
        <Avatar size="min-h-[2rem] max-w-[2rem]" onClick={onClick} />
        <div className="leading-5">
          <p
            className="text-white text-sm font-semibold hover:underline cursor-pointer"
            onClick={onClick}
          >
            {firstName} {lastName}
          </p>
          <p className="text-[#505050] text-sm font-semibold">@{username}</p>
        </div>
      </div>
      <button className="bg-white text-sm font-semibold text-black rounded-xl px-2 py-0 h-7 hover:bg-gray-200">
        Follow
      </button>
    </div>
  );
}

export default FollowSugProfile;
