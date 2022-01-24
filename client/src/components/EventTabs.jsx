import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import { Tab } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { classNames } from "./utilities";
import useGetEvents from "../hooks/useGetEvents";
import empty from "../assets/empty.png";
function EventTabs() {
  const { setActiveTab, events } = useGetEvents();
  function renderEvent() {
    var ret = events.map((event, idx) => {
      return (
        <div key={event._id} className="p-2">
          <EventCard {...event} />
        </div>
      );
    });
    if (ret.length === 0) {
      ret= [(
        <div className="p-2">
          <div className=" w-full text-center h-full bg-gray-200 m-4 py-6 ">
            <img src={empty} alt="empty" className="h-32 w-32 mx-auto my-12" />
            <p className="text-xl text-gray-600 capitalize p-6 ">No events to display</p>
          </div>
        </div>  
      )]
    }
    return ret;
  }
  return (
    <Tab.Group>
      <Tab.List className="sticky top-0 bg-white p-1  shadow">
        <div className="m-2 bg-blue-900 grid grid-cols-4  rounded-lg p-3">
          <Tab
            className={({ selected }) => {
              if (selected) {
                setActiveTab("getEvent");
              }
              return classNames(
                selected
                  ? "bg-white text-black shadow"
                  : " text-white bg-transparent",
                "p-2 mx-1",
                "transform ease-in-out duration-300 transition-all",
                "focus:ring-4 ring-blue-500",
                "rounded-lg"
              );
            }}
          >
            Upcoming
          </Tab>
          <Tab
            className={({ selected }) => {
              if (selected) {
                setActiveTab("past");
              }
              return classNames(
                selected
                  ? "bg-white text-black shadow"
                  : " text-white bg-transparent",
                "p-2 mx-1",
                "transform ease-in-out duration-300 transition-all",
                "focus:ring-4 ring-blue-500",
                "rounded-lg"
              );
            }}
          >
            Past
          </Tab>

          <Tab
            className={({ selected }) => {
              if (selected) {
                setActiveTab("coordinator/" + localStorage.getItem("id"));
              }
              return classNames(
                selected
                  ? "bg-white text-black shadow"
                  : " text-white bg-transparent",
                "p-2 mx-1",
                "transform ease-in-out duration-300 transition-all",
                "focus:ring-4 ring-blue-500",
                "rounded-lg"
              );
            }}
          >
            Your Events
          </Tab>
          <Link
            to="/new-event"
            className="lg:w-36 ml-4 bg-green-500 rounded-lg text-white pt-2 text-center transition ease-in-out duration-300 transform hover:scale-105 "
          >
            {" "}
            New Event{" "}
            <PlusCircleIcon className="inline w-6 relative bottom-0.5 text-gray-100" />{" "}
          </Link>
        </div>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>{renderEvent()}</Tab.Panel>
        <Tab.Panel>{renderEvent()}</Tab.Panel>
        <Tab.Panel>{renderEvent()}</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default EventTabs;
