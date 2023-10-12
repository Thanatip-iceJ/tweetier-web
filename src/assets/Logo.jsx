import React from "react";

function Logo({ animation }) {
  return (
    <div>
      <h1
        id="logo"
        className={`text-7xl text-[#1D9BF1] font-irish ${animation}`}
      >
        TWEETIER
      </h1>
    </div>
  );
}

export default Logo;
