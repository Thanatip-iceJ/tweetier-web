import React from "react";
import { BsPerson } from "react-icons/bs";

function Input({
  placeholder,
  width = "[24rem]",
  icon = <BsPerson />,
  type = "text",
  name,
  value,
  hasError,
  onChange,
}) {
  return (
    <div className="relative">
      <div className="absolute top-8 left-3 text-xl">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        className={`block bg-white rounded-sm mt-4 pl-11 py-3 border border-gray-500 w-${width} outline-none focus:border focus:border-main focus:ring focus:ring-blue-300`}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
