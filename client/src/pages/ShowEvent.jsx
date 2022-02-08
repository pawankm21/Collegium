import React from "react";
import {
  TagIcon,
  ExclamationCircleIcon,
  ClockIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import { formatDate } from "../components/utilities";
import useShowEvent from "../hooks/useShowEvent";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { classNames } from "../components/utilities";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../css/Markdown.css";
import Footer from "../components/Footer";
import LoadingModal from "../components/LoadingModal";

function ShowEvent() {
  const { id } = useParams();
  const { data, canEdit,loading,setLoading } = useShowEvent(id);
  const history = useHistory();
  //fix delete event function
  async function joinEvent() {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/Event/addAttendee/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: sessionStorage.getItem("id"),
        }),
      }
    );
    const json = await response.json();
    // console.log(json);
    window.alert(json.message);
  }
  function deleteEvent() {
    fetch(`${process.env.REACT_APP_SERVER_URL}/Event/deleteEvent/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: sessionStorage.getItem("id"),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        window.alert(json.message);
        history.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <LoadingModal loading={loading} setLoading={setLoading} showButton={false} />
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
            className="h-96  object-cover w-full object-center shadow rounded"
          />

          <h1 className="relative md:w-2/3 m-auto rounded px-4 py-6 text-center bottom-8 bg-white text-4xl font-bold shadow capitalize">
            {data.name}
          </h1>
        </div>

        <div className="w-full md:flex bg-gray-100">
          <div className="md:hidden ml-8 mt-4  p-4 m-auto bg-white shadow rounded text-left ">
            <div className="flex place-items-center bg-blue-100 rounded-lg p-2 shadow my-2">
              <ExclamationCircleIcon className="text-red-700 w-10 h-10 mr-2" />
              <div>
                <h1 className="text-left font-semibold text-xl">
                  Register before
                </h1>
                <p className="text-left text-gray-700 font-bold">
                  {formatDate(data.lastDate)}
                </p>
              </div>
            </div>
            <div className="flex place-items-center bg-blue-100 rounded-lg p-2 shadow my-2">
              <ClockIcon className="text-blue-900 w-10 h-10 mr-2" />
              <div>
                <h1 className="text-left font-semibold text-xl">
                  {formatDate(data.when)}
                </h1>
                <p>to {formatDate(data.tillWhen)}</p>
              </div>
            </div>
            <div className="flex place-items-center bg-blue-100 rounded-lg p-2 shadow my-2">
              <LocationMarkerIcon className="text-blue-900 w-10 h-10 mr-2" />
              <h1 className="text-left font-semibold text-xl">{data.where}</h1>
            </div>
            <div>
              <button
                className="bg-blue-700 w-full text-white p-2 rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-900 ease-in-out duration-300 mt-4"
                onClick={joinEvent}
              >
                Register
              </button>
            </div>
            <div className="w-full">
              <Link
                className={classNames(
                  canEdit ? "" : "hidden",
                  "bg-blue-700 w-full block text-center text-white p-2 rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-900 ease-in-out duration-300 my-2"
                )}
                to={`/edit-event/${id}`}
              >
                Edit
              </Link>
            </div>
            <div>
              <button
                className={classNames(
                  canEdit ? "" : "hidden",
                  "bg-red-700 w-full block text-center text-white p-2 rounded-xl shadow-lg hover:shadow-2xl hover:bg-red-900 ease-in-out duration-300 my-2"
                )}
                onClick={deleteEvent}
              >
                Delete
              </button>
            </div>
            <div>
              <h1>Hosted By:</h1>
              <div className="">
                {data.coordinators.map((coordinator) => {
                  return <h1 key={coordinator} >{coordinator}</h1>;
                })}
              </div>
            </div>
          </div>
          <div className="md:w-2/3 px-4 ">
            <div className="w-full p-4 m-4 bg-white shadow  rounded">
              <h1 className="text-2xl font-bold text-gray-900 capitalize mt-6">
                {data.tagline ? data.tagline : "Event Description"}
              </h1>
              <div className="text-left text-gray-700">
                <ReactMarkdown
                  className="markdown-body"
                  children={data.message}
                  remarkPlugins={[remarkGfm]}
                />
              </div>
              <div className="">
                <h1 className="font-bold text-xl"> Who can Attend?</h1>
                <div className="flex">
                  {data.tags.length !== 0 ? (
                    data.tags.map((tag) => {
                      return (
                        <div key={tag} className="flex m-2 w-max rounded-lg p-2 place-items-center bg-blue-900  shadow">
                          <TagIcon className="text-white w-6 h-6 mx-2" />
                          <span className="text-white">{tag}</span>
                        </div>
                      );
                    })
                  ) : (
                    <div className="flex m-2 w-max rounded-lg p-2 place-items-center bg-blue-900  shadow">
                      {" "}
                      <TagIcon className="text-white w-6 h-6 mx-2" />
                      <span className="text-white">Everone</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/4 hidden md:block mt-4  p-4 m-auto bg-white shadow rounded text-left ">
            <div className="flex place-items-center bg-blue-100 rounded-lg p-2 shadow my-2">
              <ExclamationCircleIcon className="text-red-700 w-10 h-10 mr-2" />
              <div>
                <h1 className="text-left font-semibold text-xl">
                  Register before
                </h1>
                <p className="text-left text-gray-700 font-bold">
                  {formatDate(data.lastDate)}
                </p>
              </div>
            </div>
            <div className="flex place-items-center bg-blue-100 rounded-lg p-2 shadow my-2">
              <ClockIcon className="text-blue-900 w-10 h-10 mr-2" />
              <div>
                <h1 className="text-left font-semibold text-xl">
                  {formatDate(data.when)}
                </h1>
                <p>to {formatDate(data.tillWhen)}</p>
              </div>
            </div>
            <div className="flex place-items-center bg-blue-100 rounded-lg p-2 shadow my-2">
              <LocationMarkerIcon className="text-blue-900 w-10 h-10 mr-2" />
              <h1 className="text-left font-semibold text-xl">{data.where}</h1>
            </div>
            <div>
              <button
                className="bg-blue-700 w-full text-white p-2 rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-900 ease-in-out duration-300 mt-4"
                onClick={joinEvent}
              >
                Register
              </button>
            </div>
            <div className="w-full">
              <Link
                className={classNames(
                  canEdit ? "" : "hidden",
                  "bg-blue-700 w-full block text-center text-white p-2 rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-900 ease-in-out duration-300 my-2"
                )}
                to={`/edit-event/${id}`}
              >
                Edit
              </Link>
            </div>
            <div>
              <button
                className={classNames(
                  canEdit ? "" : "hidden",
                  "bg-red-700 w-full block text-center text-white p-2 rounded-xl shadow-lg hover:shadow-2xl hover:bg-red-900 ease-in-out duration-300 my-2"
                )}
                onClick={deleteEvent}
              >
                Delete
              </button>
            </div>
            <div>
              <h1>Hosted By:</h1>
              <div className="">
                {data.coordinators.map((coordinator) => {
                  return <h1 key={coordinator}>{coordinator}</h1>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 w-full ">

      <Footer/>
      </div>
      </div>
      </>
  );
}

export default ShowEvent;
