import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import { Tab } from "@headlessui/react";

function classNames(...args) {
  return args.filter(Boolean).join(" ");
}

function EventTabs() {
  const [getEvent, setGetEvent] = useState([]);
  const [activeTab, setActiveTab] = useState("getEvent");
  async function fetchData() {
    const response = await fetch(`http://localhost:9000/Event/${activeTab}`);
    const json = await response.json();
    setGetEvent(json);
    console.log(json);
  }
  useEffect(() => {
    fetchData();
  }, [activeTab]);
  function renderTab() {
    try {
      return getEvent.map((event, idx) => {
        return (
          <div className="my-2">
            {" "}
            <EventCard key={idx} {...event} />
          </div>
        );
      });
    } catch (err) {
      return <div className="w-full text-5xl text-center m-auto font-bold capitalize mt-20 ">No Events</div>;
    }
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
                setActiveTab("getEvent/past");
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
                setActiveTab("getEvent/coordinator/1");
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
        </div>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>{renderTab()}</Tab.Panel>
        <Tab.Panel>{renderTab()}</Tab.Panel>

        <Tab.Panel>{renderTab()}</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default EventTabs;
