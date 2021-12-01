import React from "react";

function UserProfileSmall({ image, name, upcomingEvents = 0 }) {
  return (
    <div className=" h-2/5 m-2 bg-white dark:bg-blue-900  rounded  shadow text-center pb-2">
      <div className="h-1/2 w-full bg-gray-900 pt-2 grid grid-cols-1 place-items-center  rounded">
        <h1 className="text-lg text-gray-100 font-bold capitalize text-center ">
          John Doe
        </h1>
        <img
          className="w-28 rounded-full h-28 object-cover mt-3 object-center border-white border-8"
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt={name}
        />
        <div className="text-left text-lg text-black mt-2">
          <p>
            Upcoming Events :{" "}
            <span className="font-bold">{upcomingEvents}</span>{" "}
          </p>
          <p>
            Events Attended :{" "}
            <span className="font-bold">{upcomingEvents}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfileSmall;
