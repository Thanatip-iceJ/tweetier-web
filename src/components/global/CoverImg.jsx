import React from "react";

const defaultImg =
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80";

function CoverImg({ src, size = "h-[15rem]" }) {
  return (
    <div className={`flex bg-white ${size} bg-cover cursor-pointer`}>
      <img src={src || defaultImg} alt="coverImg" className="w-full" />
    </div>
  );
}

export default CoverImg;
