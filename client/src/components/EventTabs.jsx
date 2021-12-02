import React from "react";
import EventCard from "../components/EventCard";
import { Tab } from "@headlessui/react";
function classNames(...args) {
  return args.filter(Boolean).join(" ");
}
const EVENT = {
  Upcoming: [
    <EventCard
      imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
      name="Upcoming Event"
      message=" lorem ipsum dolores"
      tags={["lorem", "ipsum", "dolores"]}
    />,
    <EventCard
      imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
      name="hello world"
      message=" lorem ipsum dolores"
      tags={["lorem", "ipsum", "dolores"]}
    />,
    <EventCard
      imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
      name="hello world"
      message=" lorem ipsum dolores"
      tags={["lorem", "ipsum", "dolores"]}
    />,
  ],
  Past: [
    <EventCard
      imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
      name="Past"
      message=" lorem ipsum dolores"
      tags={["lorem", "ipsum", "dolores"]}
    />,
    <EventCard
      imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
      name="hello world"
      message=" lorem ipsum dolores"
      tags={["lorem", "ipsum", "dolores"]}
    />,
    <EventCard
      imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
      name="hello world"
      message=" lorem ipsum dolores"
      tags={["lorem", "ipsum", "dolores"]}
    />,
  ],
  Ongoing: [
    <EventCard
      imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
      name="Ongoing"
      message=" lorem ipsum dolores"
      tags={["lorem", "ipsum", "dolores"]}
    />,
    <EventCard
      imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
      name="hello world"
      message=" lorem ipsum dolores"
      tags={["lorem", "ipsum", "dolores"]}
    />,
    <EventCard
      imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
      name="hello world"
      message=" lorem ipsum dolores"
      tags={["lorem", "ipsum", "dolores"]}
    />,
  ],
  "Your Events": [
    <EventCard
      imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
      name="Your events"
      message=" lorem ipsum dolores"
      tags={["lorem", "ipsum", "dolores"]}
    />,
    <EventCard
      imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
      name="hello world"
      message=" lorem ipsum dolores"
      tags={["lorem", "ipsum", "dolores"]}
    />,
    <EventCard
      imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
      name="hello world"
      message=" lorem ipsum dolores"
      tags={["lorem", "ipsum", "dolores"]}
    />,
  ],
};
function EventTabs() {
  return (
    <Tab.Group>
      <Tab.List className="sticky top-0 bg-white p-1  shadow">
        <div className="m-2 bg-blue-400 grid grid-cols-4  rounded-lg p-3">
          <Tab
            className={({ selected }) =>
              classNames(
                selected
                  ? "bg-white text-black shadow"
                  : " text-gray-700 bg-transparent",
                "p-2 mx-1",
                "transform ease-in-out duration-300 transition-all",
                "focus:ring-4 ring-blue-500",
                "rounded-lg"
              )
            }
          >
            Upcoming
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                selected
                  ? "bg-white text-black shadow"
                  : " text-gray-700 bg-transparent",
                "p-2 mx-1",
                "transform ease-in-out duration-300 transition-all",
                "focus:ring-4 ring-blue-500",
                "rounded-lg"
              )
            }
          >
            Past
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                selected
                  ? "bg-white text-black shadow"
                  : " text-gray-700 bg-transparent",
                "p-2 mx-1",
                "transform ease-in-out duration-300 transition-all",
                "focus:ring-4 ring-blue-500",
                "rounded-lg"
              )
            }
          >
            Ongoing
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                selected
                  ? "bg-white text-black shadow"
                  : " text-gray-700 bg-transparent",
                "p-2 mx-1",
                "transform ease-in-out duration-300 transition-all",
                "focus:ring-4 ring-blue-500",
                "rounded-lg"
              )
            }
          >
            Your Events
          </Tab>
        </div>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          {EVENT.Upcoming.map((event, index) => {
            return (
              <div className="mt-2 mb-2" key={index}>
                {event}
              </div>
            );
          })}
        </Tab.Panel>
        <Tab.Panel>
          {EVENT.Past.map((event, index) => {
            return (
              <div className="mt-2 mb-2" key={index}>
                {event}
              </div>
            );
          })}
        </Tab.Panel>
        <Tab.Panel>
          {EVENT.Ongoing.map((event, index) => {
            return (
              <div className="mt-2 mb-2" key={index}>
                {event}
              </div>
            );
          })}
        </Tab.Panel>
        <Tab.Panel>
          {EVENT["Your Events"].map((event, index) => {
            return (
              <div className="mt-2 mb-2" key={index}>
                {event}
              </div>
            );
          })}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default EventTabs;
