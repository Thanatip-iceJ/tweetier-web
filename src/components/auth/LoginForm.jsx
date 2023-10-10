import React from "react";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import { BsChevronDoubleLeft, BsLock } from "react-icons/bs";

function LoginForm() {
  return (
    <div className="relative z-20 flex justify-center h-[700px] items-end flex-col">
      <form className="bg-white/[0.7] flex flex-col gap-6 px-16 py-12 pb-20 rounded-2xl w-[36rem] items-center relative">
        <Link to="/">
          <div className="absolute left-6 top-6 cursor-pointer text-white text-4xl hover:text-main transition-all duration-200">
            <BsChevronDoubleLeft />
          </div>
        </Link>
        <h1 className="text-main font-bold text-[5rem]">Welcome</h1>
        <h5 className="text-center text-lg tracking-wider -mt-4 mb-3">
          We are glad to see you back with us
        </h5>
        <FormInput placeholder="Username or Email" />
        <FormInput placeholder="Password" icon={<BsLock />} type="password" />

        <button
          type="submit"
          className="bg-main w-[24rem] rounded-md py-3 font-bold text-white text-lg mt-2 hover:bg-blue-500 transition-all duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
