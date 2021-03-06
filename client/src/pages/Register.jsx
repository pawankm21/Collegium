import React from "react";
import { LockClosedIcon} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import useRegister from "../hooks/useRegister";
import { ReactComponent as LoudIcon } from "../assets/loud.svg";
import Footer from "../components/Footer";
export default function Register() {
  const {
    nameRef,
    emailRef,
    passwordRef,
    dobRef,
    rollRef,
    genderRef,
    branchRef,
    confirmPassRef,
    collegeRef,
    submitHandler,
  } = useRegister();

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-blue-900 text-yellow-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <LoudIcon className="  mx-auto h-12 w-auto" alt="collegium logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-yellow-400">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={submitHandler}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="fullname  " className="">
                  Full name
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  autoComplete="text"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-700  rounded text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  ref={nameRef}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-700  rounded focus:outline-none text-gray-900 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  ref={emailRef}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="" className="">
                    Roll Number
                  </label>
                  <input
                    id=""
                    name=""
                    type="text"
                    autoComplete="rollno"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-700 text-gray-900  rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    ref={rollRef}
                  />
                </div>
                <div className="">
                  <label htmlFor="gender" className="">
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                    ref={genderRef}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Rather not to say">Rather not to say</option>
                  </select>
                </div>
              </div>{" "}
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <label htmlFor="branch" className="">
                    Branch
                  </label>
                  <input
                    id="branch"
                    name="branch"
                    type="text"
                    autoComplete="branch"
                    required
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                    placeholder=""
                    ref={branchRef}
                  />
                </div>
                <div className="">
                  <label htmlFor="dob" className="">
                    DOB
                  </label>
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    autoComplete="dob"
                    required
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                    placeholder=""
                    ref={dobRef}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="college" className="">
                  College
                </label>
                <input
                  id="college"
                  name="college"
                  type="text"
                  autoComplete="college"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder=""
                  ref={collegeRef}
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-10 mt-10">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder=""
                  ref={passwordRef}
                />
              </div>
              <div>
                <label htmlFor="password2" className="">
                  Confirm password
                </label>
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder=""
                  ref={confirmPassRef}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>

              <div className="text-sm">
                <Link
                  href="#"
                  className="font-medium text-yellow-400 hover:text-yellow-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400"
                    aria-hidden="true"
                  />
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
