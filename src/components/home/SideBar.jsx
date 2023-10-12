import React from "react";
import SideBarLogo from "../../assets/SideBarLogo";
import { Link } from "react-router-dom";
import SideBarProfile from "./SideBarProfile";
import SideMenu from "./SideMenu";
import {
  BsFillHouseFill,
  BsFillPersonFill,
  BsBoxArrowRight,
} from "react-icons/bs";
import { MdPerson } from "react-icons/md";

function Sidebar() {
  return (
    <div className="text-white w-[18vw] flex flex-col gap-6 justify-start min-h-[100vh] items-start sticky top-0 pt-4">
      <div id="logo">
        <Link to="/home">
          <SideBarLogo />
        </Link>
      </div>
      <div id="mini-profile">
        <SideBarProfile />
      </div>
      <div id="menu" className="flex flex-col gap-6">
        <SideMenu
          title="Home"
          icon={<BsFillHouseFill size="1.3rem" />}
          to="/"
        />
        <SideMenu
          title="Profile"
          icon={<BsFillPersonFill size="1.3rem" />}
          to="/"
        />
        <SideMenu
          title="Logout"
          icon={<BsBoxArrowRight size="1.3rem" />}
          to="/"
        />
      </div>
    </div>
  );
}

export default Sidebar;
