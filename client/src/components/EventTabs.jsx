import React from "react";
import EventCard from "../components/EventCard";
import { Tab } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { classNames } from "./utilities";
import useGetEvents from "../hooks/useGetEvents";
import empty from "../assets/empty.png";
import LoadingModal from "./LoadingModal";
const tabRequest = [
  "getEvent",
  "past",
  `coordinator/${sessionStorage.getItem("id")}`,
];
function EventTabs() {
  const { setActiveTab, events,loading,setLoading} = useGetEvents(tabRequest[0]);
  function renderEvent() {
    var ret = events.map((event) => {
      return (
        <div key={event._id} className="p-2">
          <EventCard {...event} />
        </div>
      );
    });
    if (ret.length === 0) {
      ret = (
        <div className="p-2 h-full ">
          <div className=" w-full text-center h-full m-4 py-6 ">
            <img src={empty} alt="empty" className="h-32 w-32 mx-auto my-12" />
            <p className="text-xl text-gray-600 capitalize p-6 ">
              No events to display
            </p>
          </div>
        </div>
      );
    }
    return ret;
  }
  return (
    <>
      <Tab.Group
        onChange={(index) => {
          setActiveTab(tabRequest[index]);
        }}
      >
        <Tab.List className="sticky top-0 bg-white p-1  shadow">
          <div className="m-2 bg-blue-900 grid grid-cols-4  rounded-lg p-3">
            <Tab
              key="1"
              className={({ selected }) => {
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
              key="2"
              className={({ selected }) => {
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
              key="3"
              className={({ selected }) => {
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
              className="lg:w-36 ml-4 font-semibold bg-yellow-400 rounded-lg text-blue-900 pt-2 text-center transition ease-in-out duration-300 transform hover:scale-105 "
            >
              {" "}
              New Event{" "}
              <PlusCircleIcon className="inline w-6 relative bottom-0.5 text-blue-900" />{" "}
            </Link>
          </div>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel key="1">{renderEvent()}</Tab.Panel>
          <Tab.Panel key="2">{renderEvent()}</Tab.Panel>
          <Tab.Panel key="3">{renderEvent()}</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <LoadingModal loading={loading} setLoading={setLoading} showButton={false} />
    </>
  );
}

export default EventTabs;
