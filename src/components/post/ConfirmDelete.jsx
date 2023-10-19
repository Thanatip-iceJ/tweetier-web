import React, { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import axios from "../../config/axios";

function ConfirmDelete() {
  const { setIsOpenDelete, postIdState } = useContext(HomeContext);
  const deleteHandle = async (postId) => {
    try {
      await axios.delete(`/post/delete/${postIdState}`);
    } catch (err) {
      console.log(err);
    } finally {
      setIsOpenDelete(false);
    }
  };

  return (
    <div className="flex gap-8 justify-center mt-3">
      <button
        className="border border-green-500 text-green-500 px-10 py-3 rounded-md hover:bg-green-500 hover:text-black transition-all duration-200 font-bold"
        onClick={deleteHandle}
      >
        Yes
      </button>
      <button
        className="border border-red-500 text-red-500 px-10 py-3 rounded-md hover:bg-red-500 hover:text-black transition-all duration-200 font-bold"
        onClick={() => setIsOpenDelete(false)}
      >
        No
      </button>
    </div>
  );
}

export default ConfirmDelete;
