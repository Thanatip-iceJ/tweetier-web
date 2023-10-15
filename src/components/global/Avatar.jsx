import React from "react";
import defaultImg from "../../assets/default.png";

function Avatar({ size }) {
  return (
    <div className="cursor-pointer">
      <img
        src={defaultImg}
        alt="profilepic"
        className={`rounded-full ${
          size ? size : "min-h-[2.5rem] max-h-[2.5rem] min-w-[2.5rem]"
        }`}
      />
    </div>
  );
}

export default Avatar;
