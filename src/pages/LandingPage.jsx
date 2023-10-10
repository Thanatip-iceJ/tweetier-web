import React from "react";
import RegisterButton from "../components/auth/RegisterButton";
import LoginButton from "../components/auth/LoginButton";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="relative z-20 flex justify-center h-[700px] items-end flex-col text-right gap-8">
      <div id="title">
        <h1 className="text-[#1D9BF1] text-[52px] font-bold">Stay connected</h1>
        <h1 className="text-[#1D9BF1] text-[52px] font-bold leading-tight">
          Anytime Anywhere
        </h1>
      </div>
      <div id="p" className="text-white text-xl">
        <p className="tracking-widest leading-loose text-[20px]">
          Our app ensures you never miss a moment with your loved
        </p>
        <p className="tracking-widest leading-loose text-[20px]">
          ones. Stay connected on the go, whether you're at home,
        </p>
        <p className="tracking-widest leading-loose text-[20px]">
          work, or exploring the world.
        </p>
      </div>
      <div id="btn" className="flex gap-6">
        <Link to="/register">
          <RegisterButton />
        </Link>
        <Link to="/login">
          <LoginButton />
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
