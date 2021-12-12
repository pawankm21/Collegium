import React, { useState } from "react";
import useFetchUser from "../hooks/useFetchUser";
import useCountEvents from "../hooks/useCountEvents";
function UserProfileSmall() {
  const { username } = useFetchUser();
  const { upcoming, past, conducted } = useCountEvents();
  return (
    <div className=" m-2 bg-white dark:bg-blue-900  rounded  shadow text-center pb-2">
      <div className="h-1/2 w-full bg-blue-900 pt-2 grid grid-cols-1 place-items-center  rounded-t ">
        <h1 className="text-3xl text-gray-100 font-bold capitalize text-center ">
          {username}
        </h1>
        <img
          className="w-28 rounded-full h-28 object-cover mt-3 object-center border-white border-8"
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt={username}
        />
        <div className="text-left text-lg text-black p-2">
          <p>
            Upcoming Events :<span className="font-bold">{upcoming}</span>
          </p>
          <p>
            Past Events :<span className="font-bold">{past}</span>
          </p>
          <p>
            Events Conducted :<span className="font-bold">{conducted}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfileSmall;
