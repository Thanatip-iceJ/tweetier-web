import React from "react";
import { Link } from "react-router-dom";

function PageTitle({ title, icon, to }) {
  return (
    <>
      <div className="p-4 border border-border border-t-0 flex items-center gap-2">
        <Link to={to}>
          <div
            id="Icon"
            className="cursor-pointer hover:bg-gray-500/[.3] p-1 rounded-full"
          >
            {icon}
          </div>
        </Link>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div />
    </>
  );
}

export default PageTitle;
