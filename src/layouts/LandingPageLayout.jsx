import React from "react";
import Logo from "../assets/Logo";
import { Outlet } from "react-router-dom";

function LandingPageLayout() {
  return (
    <>
      <div className="relative w-full h-[110vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2110&q=80')`,
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        {/* Content Container */}
        <div id="container" className="mx-auto w-4/6">
          <div className="relative z-20 pt-[36px]">
            <Logo />
          </div>
          <div className="relative z-20">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageLayout;
