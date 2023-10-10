import React from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div>
      <Link to="/">
        <div className="absolute -left-20 -top-14 cursor-pointer text-white text-5xl hover:text-main transition-all duration-200">
          <BsChevronDoubleLeft />
        </div>
      </Link>
    </div>
  );
}

export default RegisterPage;
