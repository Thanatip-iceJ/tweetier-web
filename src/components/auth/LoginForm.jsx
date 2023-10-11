import React, { useState } from "react";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import { BsChevronDoubleLeft, BsLock } from "react-icons/bs";
import { loginSchema } from "../../validSchema/schemas";
import ErrorSpan from "./errorSpan";

function LoginForm() {
  // States
  const [input, setInput] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [error, setError] = useState({});

  // validation
  const validateLogin = (input) => {
    const { error, value } = loginSchema.validate(input, { abortEarly: false });
    if (error) {
      const result = error.details.reduce((acc, x) => {
        acc[x.context.label] = x.message;
        return acc;
      }, {});
      console.log(result);
      return result;
    }
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = validateLogin(input);
    if (validateError) {
      setError(validateError);
      return;
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative z-20 flex justify-center h-[80vh] items-end flex-col">
      <form
        className="bg-white/[0.8] flex flex-col gap-1 px-16 py-12 pb-20 rounded-md w-[36rem] items-center relative"
        onSubmit={handleSubmit}
      >
        <Link to="/">
          <div className="absolute left-6 top-6 cursor-pointer text-white text-4xl hover:text-main transition-all duration-200">
            <BsChevronDoubleLeft />
          </div>
        </Link>
        <h1 className="text-main font-bold text-[5rem] mt-4">Welcome</h1>
        <h5 className="text-center text-lg tracking-wider  mb-3">
          We are glad to see you back with us
        </h5>
        <div>
          <FormInput
            placeholder="Username or Email"
            value={input.emailOrUsername}
            name="emailOrUsername"
            onChange={handleChange}
            hasError={error}
          />
          <ErrorSpan message={error.emailOrUsername} />
        </div>
        <div>
          <FormInput
            placeholder="Password"
            icon={<BsLock />}
            type="password"
            name="password"
            onChange={handleChange}
            hasError={error}
          />
          <ErrorSpan message={error.password} />
        </div>

        <button
          type="submit"
          className="bg-main w-[24rem] rounded-md py-3 font-bold text-white text-lg mt-4 hover:bg-blue-500 transition-all duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
