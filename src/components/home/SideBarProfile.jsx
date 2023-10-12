import React, { useContext } from "react";
import defaultImg from "../../assets/default.png";
import { Context } from "../../contexts/Context";

function SideBarProfile() {
  const { authUser } = useContext(Context);
  return (
    <div className="flex gap-2 items-center py-2 px-6 w-[18vw]">
      <div>
        <img
          src={defaultImg}
          alt="profilepic"
          className="rounded-full h-[3rem]"
        />
      </div>
      <div className="leading-5">
        <p className="text-white font-semibold">
          {authUser.firstName} {authUser.lastName}
        </p>
        <p className="text-[#707070] text-sm font-semibold">
          @{authUser.username}
        </p>
      </div>
    </div>
  );
}

export default SideBarProfile;
