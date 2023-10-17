import React, { useContext } from "react";
import axios from "../../config/axios";
import { ProfileContext } from "../../contexts/ProfileContext";

function FollowedAction({ targetId }) {
  const { setStatusWithAuth } = useContext(ProfileContext);
  //
  const handleUnfollow = async (followerId) => {
    const res = await axios.delete(`/follow/delete/${followerId}`);
    setStatusWithAuth(res.data.statusWithAuth);
  };
  return (
    <button
      className="border px-4 py-2 rounded-2xl font-bold mt-2 hover:bg-white hover:text-black transition-all duration-200"
      onClick={() => handleUnfollow(targetId)}
    >
      Unfollow
    </button>
  );
}

export default FollowedAction;
