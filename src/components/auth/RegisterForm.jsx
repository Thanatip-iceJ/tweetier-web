import React from "react";
import { BsPerson, BsLock, BsChevronDoubleLeft } from "react-icons/bs";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../contexts/Context";
import { useState } from "react";
import { registerSchema } from "../../validSchema/schemas";
import ErrorSpan from "./errorSpan";
import { toast } from "react-toastify";

function RegisterForm() {
  // Context
  const { register } = useContext(Context);
  //States
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});
  // console.log(error);
  //ValidateInput
  const validateInput = (input) => {
    const { error, value } = registerSchema.validate(input, {
      abortEarly: false,
    });

    // console.dir(error);
    if (error) {
      const result = error.details.reduce((acc, x) => {
        acc[x.context.label] = x.message;
        return acc;
      }, {});
      // console.log("xxxxx", result);
      return result;
    }
  };
  //Handlers
  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = validateInput(input);
    if (validateError) {
      setError(validateError);
      return;
    }
    setError({});
    register(input)
      .then((res) => {
        toast.success("Register successfully");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  // console.log(error);

  return (
    <div className="relative z-20 flex justify-center h-[700px] items-end flex-col">
      <form
        className="bg-white/[0.8] shadow-md border border-gray-500 flex flex-col gap-1 px-16 py-10 pb-14 rounded-md w-[36rem] items-center relative"
        onSubmit={handleSubmit}
      >
        <Link to="/">
          <div className="absolute left-6 top-6 cursor-pointer text-white text-4xl hover:text-main transition-all duration-200">
            <BsChevronDoubleLeft />
          </div>
        </Link>
        <h5 className="text-center text-lg font-semibold">Create an account</h5>
        <FormInput
          placeholder="Firstname"
          value={input.firstName}
          name="firstName"
          hasError={error}
          onChange={handleOnChange}
        />
        {error && <ErrorSpan message={error.firstName} />}
        <FormInput
          placeholder="Lastname"
          value={input.lastName}
          name="lastName"
          hasError={error}
          onChange={handleOnChange}
        />
        {error && <ErrorSpan message={error.lastName} />}
        <FormInput
          placeholder="Username"
          value={input.username}
          name="username"
          hasError={error}
          onChange={handleOnChange}
        />
        {error && <ErrorSpan message={error.username} />}
        <FormInput
          placeholder="Email"
          value={input.email}
          name="email"
          onChange={handleOnChange}
        />
        {error && <ErrorSpan message={error.email} />}
        <FormInput
          placeholder="Password"
          icon={<BsLock />}
          type="password"
          value={input.password}
          name="password"
          hasError={error}
          onChange={handleOnChange}
        />
        {error && <ErrorSpan message={error.password} />}
        <FormInput
          placeholder="Confirm password"
          icon={<BsLock />}
          type="password"
          value={input.confirmPassword}
          name="confirmPassword"
          hasError={error}
          onChange={handleOnChange}
        />
        {error && <ErrorSpan message={error.confirmPassword} />}

        <button
          type="submit"
          className="bg-main w-[24rem] mt-6 rounded-sm py-3 font-bold text-white text-lg hover:bg-blue-500 transition-all duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
