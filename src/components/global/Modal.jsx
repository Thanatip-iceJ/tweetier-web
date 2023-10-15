import React, { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";

function Modal({ children, title, isOpen }) {
  return (
    <>
      {isOpen && (
        <div className="min-w-[100vw] min-h-[100vh] bg-gray-500/[.5] fixed inset-0 z-60 flex justify-center items-center">
          <div className="bg-[#222222] p-8 rounded-lg w-[35rem] z-70">
            <div className="font-semibold text-xl rounded-full ml-[30rem] -mt-4 w-fit hover:bg-gray-400/[0.3] px-2 py-0.5 cursor-pointer">
              X
            </div>
            <div className="flex justify-center text-lg font-semibold">
              {title}
            </div>
            <div className="py-4">
              <hr className="border border-fade" />
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
