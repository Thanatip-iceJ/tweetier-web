import React, { useContext, useState } from "react";
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
import LogoutConfirm from "./LogoutConfirm";
import Modal from "../global/Modal";
import { HomeContext } from "../../contexts/HomeContext";

function Sidebar() {
  const { logout } = useContext(HomeContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="text-white flex flex-col gap-6 justify-start min-h-[100vh] items-start sticky top-0 pt-6">
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
          onClick={() => navigate("")}
        />
        <SideMenu
          title="Profile"
          icon={
            <BsFillPersonFill
              size="1.3rem"
              onClick={() => navigate("profile")}
            />
          }
        />
        <SideMenu
          title="Logout"
          icon={<BsBoxArrowRight size="1.3rem" />}
          onClick={() => setIsOpen(true)}
        />
        <button className="bg-main text-white font-bold rounded-md py-2 max-w-[80%] mt-4 ml-8 shadow-sm shadow-main hover:bg-blue-500 transition-all duration-200">
          Post
        </button>
      </div>
      <Modal title="Are you sure you want you logout?" isOpen={isOpen}>
        <LogoutConfirm />
      </Modal>
    </div>
  );
}

export default Sidebar;
