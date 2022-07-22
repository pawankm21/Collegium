import React from "react";
import EventCardSmall from "../components/EventCardSmall";
import UserProfileSmall from "../components/UserProfileSmall";
import EventTabs from "../components/EventTabs";
import useMyEvents from "../hooks/useMyEvents";
import empty from "../assets/empty.png";
import Footer from "../components/Footer";
export default function Dashboard() {
  const { events, loading } = useMyEvents();
  function displayEvents() {
    if (loading) {
      return <div>Loading...</div>;
    }
    if (events.length === 0) {
      return (
        <div className="p-2  rounded-md">
          <div className=" w-full text-center h-full m-auto py-6 ml-2 ">
            <img src={empty} alt="empty" className="h-24 w-24 mx-auto my-4" />
            <p className="text-xl text-gray-600 capitalize p-4 ">
              No events to display
            </p>
          </div>
        </div>
      );
    }
    return events.map((event, idx) => {
      return <EventCardSmall key={idx} {...event} />;
    });
  }
  return (
    <>
      <div className="w-full min-h-[100vh] overflow-hidden">
        <div className="md:flex h-[90vh] bg-gray-100 mt-4 w-screen ">
          <div className="flex flex-col md:w-1/3 h-full">
            <UserProfileSmall />
            <div className="shadow rounded mt-4 ml-2 mr-2 justify-center overflow-y-scroll bg-gray-100 h-full">
              <h1 className="text-2xl p-2 font-bold shadow bg-blue-900 text-white w-full sticky top-0 pl-4">
                Registrations
              </h1>
              <div className="pr-4 border-4 bg-white h-full divide-solid ">
                {displayEvents()}
              </div>
            </div>
          </div>
          <div className="md:w-2/3 mt-2 overflow-y-scroll h-full overflow-x-hidden">
            <EventTabs />
          </div>
        </div>
        <div className="w-full  mt-16">
          <Footer />
        </div>
      </div>
    </>
  );
}
