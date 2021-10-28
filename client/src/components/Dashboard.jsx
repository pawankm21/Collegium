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
      <div className="grid grid-cols-6">
        <div className="col-start-1 lg:col-span-2 ml-3 mt-3 mb-1 col-span-full row-span-1">
          <UserProfileSmall />
        </div>

        <div className="lg:col-start-3 lg:col-span-4 bg-green-100 m-3 col-span-full overflow-y-auto lg:row-span-3 max-h-screen rounded-lg ">
          <div className=" bg-green-500 text-center w-full sticky top-0 text-xl p-1 font-bold text-white">
            Upcoming Events
          </div>
          <div className=" pt-2 pb-1">
            <EventCard
              name="lorem ipsum"
              message={
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae saepe  "
              }
              tags={["#lorem", "#ipsum", "#dolor"]}
              imageUrl="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
            />
          </div>
          <div className=" pt-2 pb-1 ">
            <EventCard
              name="lorem ipsum"
              message={
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae saep.  "
              }
              tags={["#lorem", "#ipsum", "#dolor"]}
              imageUrl="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
            />
          </div>
          <div className=" pt-2 pb-1">
            <EventCard
              name="lorem ipsum"
              message={
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae saep.  "
              }
              tags={["#lorem", "#ipsum", "#dolor"]}
              imageUrl="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
            />
          </div>
        </div>

        <div className="col-start-1 col-flow lg:col-span-2 ml-3 mt-1 mb-3 bg-green-100 rounded-lg pt-0 pb-2 row-span-2 max-h-96 col-span-full overflow-y-auto">
          <div className=" bg-green-500 text-center w-full sticky top-0 text-xl p-1 text-white font-bold">
           Registered Events
          </div>
          {events()}
        </div>
      </div>
    </>
  );
}
