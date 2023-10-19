import React, { useContext, useEffect } from "react";

import { Context } from "../../contexts/Context";
import Avatar from "../global/Avatar";

function SideBarProfile({ onClick }) {
  const { authUser } = useContext(Context);
  useEffect(() => {
    console.log(authUser);
  }, []);
  return (
    <div className="flex gap-2 items-center py-2 px-6 w-[18vw]">
      <Avatar
        onClick={onClick}
        src={authUser.profileImg}
        size="h-[2.8rem] max-w-[2.8rem] min-w-[2.8rem]"
      />
      <div className="leading-5">
        <p
          className="text-white font-semibold hover:underline cursor-pointer"
          onClick={onClick}
        >
          {authUser.firstName} {authUser.lastName}
        </p>
        <p
          className="text-[#707070] text-sm font-semibold hover:underline cursor-pointer"
          onClick={onClick}
        >
          @{authUser.username}
        </p>
      </div>
    </div>
  );
}

export default SideBarProfile;
