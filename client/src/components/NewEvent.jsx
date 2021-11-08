import React from "react";
import Navbar from "./Navbar";
function NewEvent() {
  return (
    <>
      <Navbar />
      <div className="m-5 shadow-xl divide-y divide-gray-700 p-4">
        <h1 className="text-center capitalize font-bold text-gray-800 text-3xl mt-10 mb-10 ">
          Create Event
        </h1>
        <form>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="col-span-1 pointer-events-auto">
              <div className=" w-full  bg-gray-400 justify-center h-48 border-2 border-dashed rounded-xl border-gray-700 mt-5 pointer-events-auto">
                <input
                  type="file"
                  className=" opacity-0 w-full h-full "
                  name=""
                  id=""
                />
                <div className="pointer-events-none text-center relative bottom-24 text-gray-600">
                  Click or drag here to add file
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-5">
              <label className="text-gray-800">Event Name</label>
              <input
                className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full"
                type="text"
                placeholder="Event Name"
                name="eventName"
                required
              />{" "}
              <label className="text-gray-800">Event Name</label>
              <input
                className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full"
                type="text"
                placeholder="Event Name"
                name="eventName"
                required
              />{" "}
              <label className="text-gray-800">Event Name</label>
              <input
                className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full"
                type="text"
                placeholder="Event Name"
                name="eventName"
                required
              />
            </div>
            <div className="col-span-1 mt-5">
              <label className="text-gray-800">Event Name</label>
              <input
                className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full"
                type="text"
                placeholder="Event Name"
                name="eventName"
                required
              />
            </div>{" "}
            <div className="col-span-1 mt-5">
              <label className="text-gray-800">Event Name</label>
              <input
                className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full"
                type="text"
                placeholder="Event Name"
                name="eventName"
                required
              />
            </div>
            <div className="col-span-1 mt-5">
              <div className="col-span-1 mt-5">
                <label className="text-gray-800">Event Name</label>
                <input
                  className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full"
                  type="text"
                  placeholder="Event Name"
                  name="eventName"
                  required
                />
              </div>{" "}
              <div className="col-span-1 mt-5">
                <label className="text-gray-800">Event Name</label>
                <textarea
                  className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full"
                  type="text"
                  cols="30"
                  rows="70"
                  name="eventName"
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewEvent;
