import React from "react";

function ErrorSpan({ message }) {
  return (
    <span className="text-red-500 text-sm font-light text-left flex w-full ml-16">
      {message}
    </span>
  );
}

export default ErrorSpan;
