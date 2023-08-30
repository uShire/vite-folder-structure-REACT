import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import Logo from "../../../svg/Logo";
import { Link } from "react-router-dom";
import SpinnerButton from "../../../partials/spinners/SpinnerButton";

const SystemCreatePassword = () => {
  const [isPasswordShow, setIsPasswordShow] = React.useState();
  const [isConfirmPasswordShow, setIsConfirmPasswordShow] = React.useState();

  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      //   setIsValid(true);
      setIsSuccess(true);
    }, 2500);
    // setInterval(() => {}, 2500);
  };

  const handleShowPassword = () => setIsPasswordShow(!isPasswordShow);
  const handleConfirmShowPassword = () =>
    setIsConfirmPasswordShow(!isConfirmPasswordShow);

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="login w-full max-w-[380px] border border-gray-200 py-8 px-4 rounded-md shadow-sm">
          {/* <div className="flex flex-col items-center mb-4"> */}
          <div className="flex flex-col mb-4">
            <div className="flex justify-center">
              <Logo className="mx-auto " />
            </div>

            {isSuccess ? (
              <>
                <AiFillCheckCircle className="text-5xl fill-primary mx-auto mt-10 mb-2" />
                <h2 className="mb-4 mt-2 text-lg text-center">
                  Instruction Sent!
                </h2>
                <p className="text-sm mb-6">
                  Your new password is set and ready to be used. Click the
                  button to login.
                </p>
                <Link
                  className="text-primary text-xs block text-center mt-6"
                  to={`/system/login`}
                >
                  Back to Login
                </Link>
              </>
            ) : (
              <>
                <h2 className="mb-0 mt-10 text-lg text-center">New Password</h2>

                <form action="">
                  <div className="form__wrap">
                    <label htmlFor="">New Password</label>
                    <input
                      type={isPasswordShow ? "password" : "text"}
                      disabled={isLoading ? true : false}
                    />
                    <span className="error-show">*required</span>
                    <button
                      type="button"
                      className="absolute top-9 right-3"
                      onClick={handleShowPassword}
                    >
                      {isPasswordShow ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <div className="form__wrap">
                    <label htmlFor="">Confirm Password</label>
                    <input
                      type={isConfirmPasswordShow ? "password" : "text"}
                      disabled={isLoading ? true : false}
                    />
                    <span className="error-show">*required</span>
                    <button
                      type="button"
                      className="absolute top-9 right-3"
                      onClick={handleConfirmShowPassword}
                    >
                      {isConfirmPasswordShow ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

                  <div className="p-3 rounded-sm bg-gray-50 mb-6 border border-solid border-gray-200">
                    <h5 className="text-[12px] text-body mb-2">
                      Password Requirement
                    </h5>
                    <ul className="text-sm">
                      <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                        <BsCheckCircleFill className="opacity-50" />
                        Must have 8 characters
                      </li>
                      <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                        <BsCheckCircleFill className="opacity-50" />
                        At least 1 uppercase
                      </li>
                      <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                        <BsCheckCircleFill className="opacity-50" />
                        At least 1 lowercase
                      </li>
                      <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                        <BsCheckCircleFill className="opacity-50" />
                        At least 1 number
                      </li>
                      <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                        <BsCheckCircleFill className="opacity-50" />
                        At least 1 symbol
                      </li>
                    </ul>
                  </div>

                  <button
                    className="btn btn--primary w-full"
                    onClick={handleSubmit}
                    type="button"
                    disabled={isLoading ? true : false}
                  >
                    Confirm new Password {isLoading ? <SpinnerButton /> : ""}
                  </button>

                  <Link
                    to="/system/login"
                    className="text-primary block mt-6 text-center text-xs"
                  >
                    Back to Login
                  </Link>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemCreatePassword;
