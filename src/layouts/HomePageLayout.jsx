import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/home/sidebar";
import SuggestionBar from "../components/home/SuggestionBar";

function HomePageLayout() {
  return (
    <div className="bg-[#222222] w-full min-h-[100vh] h-fit">
      <div id="container" className="max-w-[70vw] mx-auto flex justify-between">
        <Sidebar />
        <Outlet />
        <SuggestionBar />
      </div>
    </div>
  );
}

export default HomePageLayout;
