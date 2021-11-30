import React from "react";
import EventCard from "./EventCard";
import EventCardSmall from "./EventCardSmall";
import Navbar from "./Navbar";
import UserProfileSmall from "./UserProfileSmall";
import { Tab } from "@headlessui/react";
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
  const EVENT = {
    Upcoming: [
      <div className="m-1">
        <EventCard
          imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          name="hello world"
          message=" lorem ipsum dolores"
          tags={["lorem", "ipsum", "dolores"]}
        />
      </div>,
      <div className="m-1">
        <EventCard
          imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          name="hello world"
          message=" lorem ipsum dolores"
          tags={["lorem", "ipsum", "dolores"]}
        />
      </div>,
      <div className="m-1">
        <EventCard
          imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          name="hello world"
          message=" lorem ipsum dolores"
          tags={["lorem", "ipsum", "dolores"]}
        />
      </div>,
    ],
    Past: [
      <div className="m-1">
        <EventCard
          imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          name="hello world"
          message=" lorem ipsum dolores"
          tags={["lorem", "ipsum", "dolores"]}
        />
      </div>,
      <div className="m-1">
        <EventCard
          imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          name="hello world"
          message=" lorem ipsum dolores"
          tags={["lorem", "ipsum", "dolores"]}
        />
      </div>,
      <div className="m-1">
        <EventCard
          imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          name="hello world"
          message=" lorem ipsum dolores"
          tags={["lorem", "ipsum", "dolores"]}
        />
      </div>,
    ],
    Ongoing: [
      <div className="m-1">
        <EventCard
          imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          name="hello world"
          message=" lorem ipsum dolores"
          tags={["lorem", "ipsum", "dolores"]}
        />
      </div>,
      <div className="m-1">
        <EventCard
          imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          name="hello world"
          message=" lorem ipsum dolores"
          tags={["lorem", "ipsum", "dolores"]}
        />
      </div>,
      <div className="m-1">
        <EventCard
          imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          name="hello world"
          message=" lorem ipsum dolores"
          tags={["lorem", "ipsum", "dolores"]}
        />
      </div>,
    ],
    "Your Events": [
      <div className="m-1">
        <EventCard
          imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          name="hello world"
          message=" lorem ipsum dolores"
          tags={["lorem", "ipsum", "dolores"]}
        />
      </div>,
      <div className="m-1">
        <EventCard
          imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          name="hello world"
          message=" lorem ipsum dolores"
          tags={["lorem", "ipsum", "dolores"]}
        />
      </div>,
      <div className="m-1">
        <EventCard
          imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          name="hello world"
          message=" lorem ipsum dolores"
          tags={["lorem", "ipsum", "dolores"]}
        />
      </div>,
    ],
  };

  return (
    <>
      <Navbar />
      <div className=" grid grid-flow-col  h-screen mt-8">
        <div className="flex flex-col ">
          {" "}
          <UserProfileSmall />
          <div className="shadow-2xl rounded-xl mt-4 ml-2 mr-2 justify-center h-80 overflow-y-scroll">
            <h1 className="text-2xl font-bold  bg-white w-full sticky top-0 pl-4">
              Registrations
            </h1>
            <div className="pr-4 border-4  divide-solid">{events()}</div>
          </div>
        </div>
        <Tab.Group>
          <div className="pl-4 pb-4 pr-4 shadow-2xl h-screen overflow-y-auto rounded-xl ">
            <div className="grid grid-cols-4 gap-1">
              <Tab.List>
                {" "}
                <span className="text-2xl font-bold  bg-white w-full sticky top-0 ">
                  Upcoming
                </span>
              </Tab.List>
              <Tab.List>
                {" "}
                <span className="text-2xl font-bold  bg-white w-full sticky top-0 ">
                  Ongoing
                </span>
              </Tab.List>
              <Tab.List>
                {" "}
                <span className="text-2xl font-bold  bg-white w-full sticky top-0 ">
                  Past Events
                </span>
              </Tab.List>{" "}
              <Tab.List>
                {" "}
                <span className="text-2xl font-bold  bg-white w-full sticky top-0 ">
                  Your Events
                </span>
              </Tab.List>
            </div>
             <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
      <footer className="h-16 "></footer>
    </>
  );
}
