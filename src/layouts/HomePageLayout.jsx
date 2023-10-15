import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/home/sidebar";
import SuggestionBar from "../components/home/SuggestionBar";
import HomeContextProvider from "../contexts/HomeContext";

function HomePageLayout() {
  return (
    <>
      <div className="bg-[#111111] w-full min-h-[100vh] h-fit">
        <div
          id="container"
          className="min-w-[60vw] mx-auto sm:max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl grid grid-cols-4"
        >
          <div className="">
            <Sidebar />
          </div>
          <div className="col-span-2">
            <Outlet />
          </div>
          <div className="">
            <SuggestionBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageLayout;
