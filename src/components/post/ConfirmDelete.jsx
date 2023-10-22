import React, { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import axios from "../../config/axios";

function ConfirmDelete({ yes, no }) {
  const { setIsOpenDelete, postIdState } = useContext(HomeContext);

  return (
    <div className="flex gap-8 justify-center mt-3">
      <button
        className="border border-green-500 text-green-500 px-10 py-3 rounded-md hover:bg-green-500 hover:text-black transition-all duration-200 font-bold"
        onClick={yes}
      >
        Yes
      </button>
      <button
        className="border border-red-500 text-red-500 px-10 py-3 rounded-md hover:bg-red-500 hover:text-black transition-all duration-200 font-bold"
        onClick={no}
      >
        No
      </button>
    </div>
  );
}

export default ConfirmDelete;
