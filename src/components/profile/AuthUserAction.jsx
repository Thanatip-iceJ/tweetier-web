import React from "react";

function AuthUserAction({ onClick }) {
  return (
    <button
      className="border px-4 py-2 rounded-2xl font-bold mt-2 hover:bg-white hover:text-black transition-all duration-200"
      onClick={onClick}
    >
      Edit Profile
    </button>
  );
}

export default AuthUserAction;
