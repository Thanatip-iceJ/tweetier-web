import React, { useContext, useEffect, useState } from "react";
import SideBarLogo from "../../assets/SideBarLogo";
import { Link } from "react-router-dom";
import SideBarProfile from "./SideBarProfile";
import SideMenu from "./SideMenu";
import {
  BsFillHouseFill,
  BsFillPersonFill,
  BsBoxArrowRight,
} from "react-icons/bs";
import { Context } from "../../contexts/Context";
import { useNavigate } from "react-router-dom";
import { HomeContext } from "../../contexts/HomeContext";
import { PostContext } from "../../contexts/PostContext";

function Sidebar() {
  const { logout, setIsOpenLogout, setIsOpenProfileEdit, setIsOpenPost } =
    useContext(HomeContext);
  const { authUser } = useContext(Context);

  const navigate = useNavigate();
  return (
    <div className="text-white flex flex-col gap-6 justify-start min-h-[100vh] items-start sticky top-0 pt-6">
      <div id="logo">
        <Link to="/">
          <SideBarLogo />
        </Link>
      </div>
      <div id="mini-profile">
        <SideBarProfile onClick={() => navigate(`/profile/${authUser.id}`)} />
      </div>
      <div id="menu" className="flex flex-col gap-6">
        <SideMenu
          title="Home"
          icon={<BsFillHouseFill size="1.3rem" />}
          onClick={() => navigate("/")}
        />
        <SideMenu
          title="Profile"
          icon={<BsFillPersonFill size="1.3rem" />}
          onClick={() => navigate(`profile/${authUser.id}`)}
        />
        <SideMenu
          title="Logout"
          icon={<BsBoxArrowRight size="1.3rem" />}
          onClick={() => setIsOpenLogout(true)}
        />
        <button
          className="bg-main text-white font-bold rounded-md py-2 max-w-[80%] mt-4 ml-8 shadow-sm shadow-main hover:bg-blue-500 transition-all duration-200"
          onClick={() => setIsOpenPost(true)}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
