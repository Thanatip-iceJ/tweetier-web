import React from "react";
import { BsPerson } from "react-icons/bs";

function Input({
  placeholder,
  width = "[24rem]",
  icon = <BsPerson />,
  type = "text",
}) {
  return (
    <div className="relative">
      <div className="absolute top-4 left-3 text-xl">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        className={`bg-white rounded-md pl-11 py-3 border w-${width} outline-none focus:border focus:border-main focus:ring focus:ring-blue-300`}
      />
    </div>
  );
}

export default Input;
