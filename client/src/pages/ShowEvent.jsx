import React from "react";
import { TagIcon, ClockIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { formatDate } from "../components/utilities";
import useShowEvent from "../hooks/useShowEvent";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { classNames } from "../components/utilities";
import Navbar from "../components/Navbar";
function ShowEvent() {
  const { id } = useParams();
  const { data, canEdit } = useShowEvent(id);
  const history = useHistory();
  async function joinEvent() {
    const response = await fetch(
      `http://localhost:9000/Event/addAttendee/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: localStorage.getItem("id"),
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    window.alert(json.message);
  }
  async function deleteEvent() {
    try {
       const res = await fetch(`http://localhost:9000/Event/deleteEvent/${id}`);
       const json = await res.json();
       window.alert(json.message);
    }
    catch (err) {
      window.alert(err);
    }


      
  }
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full">
        <div className="w-full p-2 ">
          <img
            src={data.imageurl}
            alt="cat"
            className="h-48  object-cover w-full object-center shadow rounded"
          />

          <h1 className="relative w-1/2 m-auto rounded p-4 text-center bottom-8 bg-white text-4xl font-bold shadow">
            {data.name}
          </h1>
        </div>

        <div className="w-full flex bg-gray-100">
          <div className="w-2/3 p-4  m-2 text-center ">
            {/* <h1 className="text-center my-4 text-gray-700 bg-gray-200 text-xl font-semibold p-4"></h1> */}

            <div className="w-full p-4 m-4 bg-white shadow">
              <h1 className="text-2xl font-bold text-gray-900 p-4 border-b border-gray-300">
                {data.name}
              </h1>
              <div className="text-left py-6 px-2 text-gray-700">
                {data.message
                  .toString()
                  .split(". ")
                  .map((item, index) => {
                    return <li key={index}>{item}.</li>;
                  })}
              </div>
            </div>
          </div>
          <div className="w-1/4 m-auto mt-4 bg-white shadow rounded p-4 text-left divide-y-2  text-gray-500">
            <h2 className=" text-gray-700 text-lg  font-semibold border-b py-2 border-gray-400">
              Deadline:{" "}
              <span className="text-red-500">{formatDate(data.lastDate)}</span>
            </h2>

            <h2 className="  text-lg  text-black font-semibold border-b py-4 border-gray-400">
              Event from{" "}
              <p className="text-blue-700">{formatDate(data.when)}</p>
              <p>to</p>
              <p className="text-blue-700"> {formatDate(data.tillWhen)}</p>
            </h2>
            <h2 className=" text-gray-700 text-lg  font-semibold border-b py-2 border-gray-400">
              Venue: <div>{data.where} </div>
            </h2>

            <div className="grid grid-cols-4 gap-4 p-4">
              {data.tags.map((item, index) => {
                return (
                  <div className="tex-center bg-blue-600 text-white p-1 shadow rounded-xl">
                    {item}
                  </div>
                );
              })}
            </div>
            <div className=" grid grid-flow-col gap-2 p-2">
              <button
                className={classNames(
                  "py-2 rounded-lg shadow bg-red-400 hover:bg-red-900 ease-in-out transition-all w-full text-center transform duration-300 text-white m-auto ",
                  canEdit ? "hidden" : ""
                )}
                onClick={joinEvent}
              >
                Join Event
              </button>
              <button
                className={classNames(
                  "py-2 rounded-lg shadow bg-red-400 hover:bg-red-900 ease-in-out transition-all w-full text-center transform duration-300 text-white m-auto ",
                  canEdit ? "" : "hidden"
                )}
                onClick={deleteEvent}
              >
                Delete Event
              </button>
              <Link
                className={classNames(
                  "py-2 rounded-lg shadow bg-blue-400 hover:bg-blue-900 ease-in-out transition-all w-full text-center transform duration-300 text-white m-auto ",
                  canEdit ? "" : "hidden"
                )}
                to={"/new-event/"}
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowEvent;
