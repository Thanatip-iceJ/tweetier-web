import React from "react";

function ErrorSpan({ message }) {
  return (
    <span className="text-red-600 text-[.85rem] font-light text-left flex w-full">
      {message}
    </span>
  );
}

export default ErrorSpan;
