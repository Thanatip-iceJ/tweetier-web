import React from "react";

function PageTitle({ title, icon }) {
  return (
    <div className="p-4 border border-border border-b-0 border-t-0">
      <div id="Icon">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
}

export default PageTitle;
