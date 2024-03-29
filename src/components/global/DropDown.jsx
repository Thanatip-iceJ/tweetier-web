import React, { useContext, useRef } from "react";
import { HomeContext } from "../../contexts/HomeContext";

function DropDown({ onClick, onClose, isOpen, setIsOpen }) {
  const { setIsOpenDelete } = useContext(HomeContext);
  //
  return (
    <div
      className="bg-[#303030] absolute rounded-md px-8 py-2 -right-[5rem] top-10 text-red-500 cursor-pointer hover:bg-[#505050] transition-all duration-200 z-10 border border-fade"
      onClick={onClick}
    >
      <div>Delete</div>
      {/* {document.addEventListener("click", handleClickOutside)} */}
    </div>
  );
}

export default DropDown;
