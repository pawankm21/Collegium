import React from "react";
import EventCard from "./EventCard";
import EventCardSmall from "./EventCardSmall";
import Navbar from "./Navbar";
import UserProfileSmall from "./UserProfileSmall";
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
      <div className=" grid grid-flow-col  h-screen mt-8">
        <div className="flex flex-col ">
          {" "}
          <UserProfileSmall />
          <div className="shadow-2xl rounded-xl mt-4 ml-2 mr-2 justify-center h-80 overflow-y-scroll">
            <h1 className="text-2xl font-bold  bg-white w-full sticky top-0 pl-4">
              Registrations
            </h1>
            <div className="pr-4 border-4  divide-solid">
              {events()}
            </div>
          </div>
        </div>

        <div className="pl-4 pb-4 pr-4 shadow-2xl h-screen overflow-y-auto rounded-xl ">
          <h1 className="text-2xl font-bold  bg-white w-full sticky top-0 ">
            Upcoming Events
          </h1>
          <div className="mt-2 m-1 mb-2   ">
            <EventCard
              imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
              name="hello world"
              message=" lorem ipsum dolores"
              tags={["lorem", "ipsum", "dolores"]}
            />
          </div>{" "}
          <div className="m-1">
            <EventCard
              imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
              name="hello world"
              message=" lorem ipsum dolores"
              tags={["lorem", "ipsum", "dolores"]}
            />
          </div>{" "}
          <div className="m-1">
            <EventCard
              imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
              name="hello world"
              message=" lorem ipsum dolores"
              tags={["lorem", "ipsum", "dolores"]}
            />
          </div>{" "}
          <div className="m-1">
            <EventCard
              imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
              name="hello world"
              message=" lorem ipsum dolores"
              tags={["lorem", "ipsum", "dolores"]}
            />
          </div>{" "}
          <div className="m-1">
            <EventCard
              imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
              name="hello world"
              message=" lorem ipsum dolores"
              tags={["lorem", "ipsum", "dolores"]}
            />
          </div>
        </div>
      </div>
      <footer className="h-16 "></footer>
    </>
  );
}
