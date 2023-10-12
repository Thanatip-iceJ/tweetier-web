import React from "react";
import { BsFillHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function SideMenu({ icon, title, to }) {
  return (
    <Link to="/home">
      <div className="flex w-[16vw] gap-3 items-center py-2 pl-6 rounded-md mx-4 hover:bg-gray-400/[.4] transition-all duration-200">
        <div className="mb-1">{icon}</div>
        <p className="font-bold text-xl">{title}</p>
      </div>
    </Link>
  );
}

export default SideMenu;
