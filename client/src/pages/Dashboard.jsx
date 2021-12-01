import React from "react";
import EventCard from "../components/EventCard";
import EventCardSmall from "../components/EventCardSmall";
import Navbar from "../components/Navbar";
import UserProfileSmall from "../components/UserProfileSmall";
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
   
      </div>
      <footer className="h-16 "></footer>
    </>
  );
}
