import React from "react";
import EventCardSmall from "../components/EventCardSmall";
import Navbar from "../components/Navbar";
import UserProfileSmall from "../components/UserProfileSmall";
import { Tab } from "@headlessui/react";
import EventTabs from "../components/EventTabs";
export default function Dashboard() {
  const events = () => {
    var ret = [];
    for (let i = 0; i < 10; i++) {
      ret.push(
        <div className=" pt-2 pb-1">
          <EventCardSmall />
        </div>
      );
    }
    return ret;
  };


  return (
    <>
      <Navbar />
      <div className="md:flex  bg-gray-100 h-screen mt-4 w-full">
        <div className="flex flex-col md:w-1/3">
          <UserProfileSmall />
          <div className="shadow rounded mt-4 ml-2 mr-2 justify-center h-80 overflow-y-scroll bg-gray-100">
            <h1 className="text-2xl p-2 font-bold  bg-white w-full sticky top-0 pl-4">
              Registrations
            </h1>
            <div className="pr-4 border-4  divide-solid">{events()}</div>
          </div>
        </div>
        <div className="md:w-2/3 mt-2 overflow-y-scroll">
        <EventTabs/>
        </div>
      </div>
      <footer className="h-16 ">
      </footer>
    </>
  );
}
