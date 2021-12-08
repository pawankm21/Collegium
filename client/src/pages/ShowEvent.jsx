import React from "react";
import Navbar from "../components/Navbar";
import { TagIcon, ClockIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { formatDate } from "../components/Data";
import useShowEvent from "../hooks/useShowEvent";

function ShowEvent() {
  const data=useShowEvent();
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full">
        <div className="w-full p-2 ">
          <img
            src=" https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="cat"
            className="h-48  object-cover w-full object-center shadow rounded"
          />

          <h1 className="relative w-1/2 m-auto rounded p-4 text-center bottom-8 bg-white text-4xl font-bold shadow">
            {data.name}
          </h1>
        </div>

        <div className="w-full flex bg-gray-100">
          <div className="w-2/3 p-4  m-2 text-center ">
            <h1 className="text-center my-4 text-gray-700 bg-gray-200 text-xl font-semibold p-4">
              {}
            </h1>
            <button className="p-4 rounded-lg shadow bg-blue-500 hover:bg-blue-900 ease-in-out hover:scale-110 transition-all transform duration-500 text-white mx-auto ">
              Join Event
            </button>
            <div className="w-full p-4 m-4 bg-white shadow">
              <h1 className="text-2xl font-bold text-gray-900 p-4 border-b border-gray-300">
                {data.name}
              </h1>
              <div className="text-left py-6 px-2 text-gray-700">
                {data.message
                  .toString()
                  .split(". ")
                  .map((item, index) => {
                    return <li key={index}>{item}.</li>;
                  })}
              </div>
            </div>
          </div>
          <div className="w-1/4 m-auto mt-4 bg-white shadow rounded p-4 text-left divide-y-2  text-gray-500">
            <h2 className=" text-gray-700 text-lg  font-semibold border-b py-2 border-gray-400">
              Deadline:{" "}
              <span className="text-red-500">{formatDate(data.lastDate)}</span>
            </h2>

            <h2 className="  text-lg  text-black font-semibold border-b py-4 border-gray-400">
              Event on <p className="text-blue-700">{formatDate(data.when)}</p>
              <p className="text-blue-700">to 25 July 2021 6:00pm</p>
            </h2>
            <h2 className=" text-gray-700 text-lg  font-semibold border-b py-2 border-gray-400">
              Venue: <div>{data.where} </div>
            </h2>
            <div className="grid grid-cols-4 gap-4 p-4">
              {data.tags.map((item, index) => {
                return (
                  <div className="tex-center bg-blue-600 text-white p-1 shadow rounded-xl">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowEvent;
