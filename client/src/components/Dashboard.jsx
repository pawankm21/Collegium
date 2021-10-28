import React from "react";
import EventCard from "./EventCard";
import EventCardSmall from "./EventCardSmall";
import Navbar from "./Navbar";
import UserProfileSmall from "./UserProfileSmall";
export default function Dashboard() {
  const events = () => {
    var ret = [];
    for (let i = 0; i < 5; i++) {
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
      <div className=" grid-col"></div>
      <div className="w-1/3 ml-5">
        <div className="mb-5 mt-5">
          <UserProfileSmall />
        </div>
        <section className=" grid grid-col-1 justify-center rounded-lg bg-red-500">
          {events()}
        </section>
      </div>
    </>
  );
}
