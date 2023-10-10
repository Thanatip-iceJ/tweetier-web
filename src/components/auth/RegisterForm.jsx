import React from "react";
import { BsPerson, BsLock, BsChevronDoubleLeft } from "react-icons/bs";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <div className="relative z-20 flex justify-center h-[700px] items-end flex-col">
      <form className="bg-white/[0.7] flex flex-col gap-6 px-16 py-10 pb-14 rounded-2xl w-[36rem] items-center relative">
        <Link to="/">
          <div className="absolute left-6 top-6 cursor-pointer text-white text-4xl hover:text-main transition-all duration-200">
            <BsChevronDoubleLeft />
          </div>
        </Link>
        <h5 className="text-center text-lg font-semibold">Create an account</h5>
        <FormInput placeholder="Firstname" />
        <FormInput placeholder="Lastname" />
        <FormInput placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Password" icon={<BsLock />} type="password" />
        <FormInput
          placeholder="Confirm password"
          icon={<BsLock />}
          type="password"
        />

        <button
          type="submit"
          className="bg-main w-[24rem] rounded-md py-3 font-bold text-white text-lg mt-2 hover:bg-blue-500 transition-all duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
