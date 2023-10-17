import React, { useContext } from "react";
import axios from "../../config/axios";
import { ProfileContext } from "../../contexts/ProfileContext";

function UnknownAction({ targetId }) {
  const { setStatusWithAuth } = useContext(ProfileContext);
  const handleFollow = async (targetId) => {
    try {
      const res = await axios.post(`/follow/${targetId}`);
      setStatusWithAuth(res.data.setStatusWithAuth);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <button
      className="border px-4 py-2 rounded-2xl font-bold mt-2 hover:bg-white hover:text-black transition-all duration-200"
      onClick={() => handleFollow(targetId)}
    >
      Follow
    </button>
  );
}

export default UnknownAction;
