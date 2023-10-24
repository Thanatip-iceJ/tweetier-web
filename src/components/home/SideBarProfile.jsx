import React, { useContext, useEffect, useState } from "react";

import { Context } from "../../contexts/Context";
import Avatar from "../global/Avatar";
import { getAccessToken } from "../../utils/local-storage";
import axios from "../../config/axios";

function SideBarProfile({ onClick }) {
  const { authUser, setAuthUser } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const displayName = `${authUser.firstName} ${authUser.lastName}`;
  const slicedDisplayName = displayName.slice(0, 15) + "...";
  const showName = displayName.length > 15 ? slicedDisplayName : displayName;

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
          {showName}
        </p>
        <p
          className="text-[#707070] text-sm font-semibold hover:underline cursor-pointer"
          onClick={onClick}
        >
          @{authUser.username.toLowerCase()}
        </p>
      </div>
    </div>
  );
}

export default SideBarProfile;
