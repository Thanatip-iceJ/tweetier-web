import React from "react";
import Logo from "./Logo";

function Loading() {
  return (
    <div className="bg-gray-600 flex justify-center items-center w-[100%] h-[100%] min-h-[100vh]">
      <Logo animation="animate-pulse" />
    </div>
  );
}

export default Loading;
