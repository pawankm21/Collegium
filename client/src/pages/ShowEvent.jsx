import React from "react";
import { TagIcon, ClockIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { formatDate } from "../components/utilities";
import useShowEvent from "../hooks/useShowEvent";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { classNames } from "../components/utilities";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../css/Markdown.css";

function ShowEvent() {
  const { id } = useParams();
  const { data, canEdit } = useShowEvent(id);
  const history = useHistory();
  //fix delete event function
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
  function deleteEvent() {
    fetch(`http://localhost:9000/Event/deleteEvent/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: localStorage.getItem("id"),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        window.alert(json.message);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="w-full h-screen">
      <div className="w-full">
        <div className="w-full p-2 ">
          <img
            src={
              data.imageurl
                ? data.imageurl
                : "https://designshack.net/wp-content/uploads/placeholder-image.png"
            }
            alt="banner"
            className="h-64  object-cover w-full object-center shadow rounded"
          />

          <h1 className="relative w-1/2 m-auto rounded p-4 text-center bottom-8 bg-white text-4xl font-bold shadow uppercase">
            {data.name}
          </h1>
        </div>

        <div className="w-full flex bg-gray-100">
          <div className="w-2/3 p-4  m-2 text-center ">
            {/* <h1 className="text-center my-4 text-gray-700 bg-gray-200 text-xl font-semibold p-4">
              Description
        
            </h1> */}

            <div className="w-full p-4 m-4 bg-white shadow">
              <h1 className="text-2xl font-bold text-gray-900 uppercase p-4 border-b border-gray-300">
                {data.tagline ? data.tagline : "EVENT DETAILS"}
              </h1>
              <div className="text-left py-6 px-2 text-gray-700">
                <ReactMarkdown
                  className="markdown-body"
                  children={data.message}
                  remarkPlugins={[remarkGfm]}
                />
              </div>
            </div>
          </div>
          <div className="w-1/4 m-auto mt-4 bg-white shadow rounded p-4 text-left divide-y-2  text-gray-500">
            <h2 className=" text-gray-700 text-lg  font-semibold  py-2 ">
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

            <div className="grid grid-flow-col text-center gap-2 p-4 m-4">
              {data.tags.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="tex-center bg-blue-600 text-white p-1 text-xs text-center shadow rounded w-24 "
                  >
                    <TagIcon className="h-4 w-4 inline mx-2" />
                    {item}
                  </div>
                );
              })}
            </div>
            <div className=" grid grid-flow-col gap-2 p-2">
              <button
                className={classNames(
                  "py-2 rounded-lg shadow bg-red-400 hover:bg-red-900 ease-in-out transition-all w-full text-center transform duration-300 text-white m-auto "
                )}
                onClick={joinEvent}
              >
                Join Event
              </button>
              <button
                className={classNames(
                  "py-2 rounded-lg shadow bg-red-400 hover:bg-red-900 ease-in-out transition-all w-full text-center transform duration-300 text-white m-auto",
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
