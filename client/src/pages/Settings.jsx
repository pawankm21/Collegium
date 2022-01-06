import React from "react";
import useUpdateUser from "../hooks/useUpdateUser";
import useFetchUser from "../hooks/useFetchUser";
import Navbar from "../components/Navbar";
export default function Settings() {
  const { username, email, college, roll, branch } = useFetchUser();
  const {
    formSubmitHandler,
    setName,
    setEmail,
    setPassword,
    setPasswordConfirm,
    setIsLoading,
    setRoll,
    setBranch,
    setCollege,
    setImage,
    setImageUrl,
  } = useUpdateUser();

  return (
    <>
      <Navbar />
      <div className="p-6  w-full h-screen">
        <h1 className="w-full text-center text-6xl bold capitalize p-2">
          Settings
        </h1>
        <form
          className=" w-full md:flex bg-white shadow mt-4 p-4 rounded"
          onSubmit={(e)=>formSubmitHandler(e,)}
        >
          <div className="w-full lg:w-1/3 border-2 border-blue-200 rounded text-center p-4 mr-2 ">
            <h1 className="text-lg py-6 font-bold capitalize">Profile Image</h1>

            <div className=" relative  rounded-full bg-red-200 w-36 h-36 m-auto flex mb-8">
              <img
                src="https://images.unsplash.com/photo-1638987168435-e5f278c25a90"
                alt="profile"
                className="w-full h-full rounded-full object-cover object-center"
              />
              <input
                type="file"
                name="photo"
                id="photo"
                className="absolute w-full h-full top-0 rounded-full left-0 pointer-events-auto opacity-0"
              />
              <p className="absolute top-10 text-black  bg-opacity-25 font-bold bg-white pointer-events-none">
                click here to add image
              </p>
            </div>
            <button className="bg-blue-500  text-white py-2 px-4 rounded shadow hover:scale-110  transform ease-in-out transition duration-300 border-b-0">
              Upload
            </button>
          </div>
          <div className="w-full lg:w-2/3 border-2 border-blue-200 rounded text-center p-4 ml-2">
            <div className="mt-6 w-full text-left">
              <h1 className="text-lg pb-6 font-bold capitalize">
                Your Profile
              </h1>
              <div className="rounded-md shadow-sm ">
                <div>
                  <label htmlFor="fullname  " className="">
                    Full name
                  </label>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    required
                    defaultValue={username}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                    onChange={(e) => setName(e.target.value)}
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
                    required
                    defaultValue={email}
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="" className="">
                      Roll Number
                    </label>
                    <input
                      type="text"
                      required
                      defaultValue={roll}
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      onChange={(e) => setRoll(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="branch" className="">
                      Branch
                    </label>
                    <input
                      id="branch"
                      name="branch"
                      type="text"
                      required
                      defaultValue={branch}
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      onChange={(e) => setBranch(e.target.value)}
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
                    required
                    defaultValue={college}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                    placeholder=""
                    onChange={(e) => setCollege(e.target.value)}
                  />
                </div>
                <div>
                  <h1 className="text-lg py-6 font-bold capitalize">
                    Change password
                  </h1>
                  <label htmlFor="college">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="college">Confirm Password</label>
                  <input
                    id="password2"
                    name="password2"
                    type="password"
                    autoComplete="off"
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mt-4"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
