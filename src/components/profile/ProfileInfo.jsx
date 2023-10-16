import React from "react";
import { BsFillCalendarWeekFill } from "react-icons/bs";

function ProfileInfo({ name, username, bio, date, following, followers }) {
  return (
    <div className="px-4 flex flex-col gap-2">
      <div id="name" className="flex flex-col mt-3">
        <h3 className="text-xl font-semibold leading-6">{name}</h3>
        <span className="text-fade text-sm font-semibold">@{username}</span>
      </div>
      <div className="break-word text-[.9rem]">{bio}</div>
      <div className="text-fade text-sm flex gap-1 items-center font-semibold">
        <BsFillCalendarWeekFill /> <div className="">Joined {date}</div>
      </div>
      <div id="followings" className="text-[.9rem] flex gap-6 mt-1">
        <div className="flex gap-1">
          <div>{following}</div>
          <div className="text-fade">Following</div>
        </div>
        <div className="flex gap-1">
          <div>{followers}</div>
          <div className="text-fade">Followers</div>
        </div>
      </div>
      <div className="border-b-4 w-fit p-3 border-main ml-3 cursor-pointer">
        Posts
      </div>
    </div>
  );
}

export default ProfileInfo;
