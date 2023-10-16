import React, { useContext } from "react";
import Modal from "../global/Modal";
import { HomeContext } from "../../contexts/HomeContext";
import { Context } from "../../contexts/Context";

function LogoutConfirm({ onClose }) {
  const { logout } = useContext(Context);
  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="flex gap-16 justify-center">
        <button
          className="border border-red-500 hover:bg-red-500 hover:text-black transition-all duration-200 px-8 py-1 rounded-md text-red-500 font-semibold text-lg"
          onClick={logout}
        >
          Logout
        </button>
        <button
          className="border rounded-md px-8 py-3 hover:bg-white hover:text-black transition-all duration-200 font-semibold text-lg"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default LogoutConfirm;
