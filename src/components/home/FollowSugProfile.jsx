import React, { useContext } from "react";
import Avatar from "../global/Avatar";
import { HomeContext } from "../../contexts/HomeContext";
import axios from "../../config/axios";

function FollowSugProfile({
  firstName,
  lastName,
  username,
  profileImg,
  onClick,
  userId,
  followHandle,
}) {
  const { users, setUsers } = useContext(HomeContext);

  const handleFollow = async () => {
    try {
      const res = await axios.post(`/follow/${userId}`);
      setUsers(users.filter((x) => userId !== x.id));
    } catch (err) {
      console.log(err);
    }
  };
  const displayName = `${firstName} ${lastName}`;
  const slicedDisplayName = displayName.slice(0, 15) + "...";
  const showName = displayName.length > 15 ? slicedDisplayName : displayName;

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center py-2 ">
        <Avatar
          size="min-h-[2rem] max-w-[2rem]"
          onClick={onClick}
          src={profileImg}
        />
        <div className="leading-5">
          <p
            className="text-white text-sm font-semibold hover:underline cursor-pointer"
            onClick={onClick}
          >
            {showName}
          </p>
          <p className="text-[#505050] text-sm font-semibold">
            @{username.toLowerCase()}
          </p>
        </div>
      </div>
      <button
        className="bg-white text-sm font-semibold text-black rounded-xl px-2 py-0 h-7 hover:bg-gray-200"
        onClick={handleFollow}
      >
        Follow
      </button>
    </div>
  );
}

export default FollowSugProfile;
