import React from "react";
import EventCardSmall from "../components/EventCardSmall";
import UserProfileSmall from "../components/UserProfileSmall";
import EventTabs from "../components/EventTabs";
import useMyEvents from "../hooks/useMyEvents";
export default function Dashboard() {
  const {events, loading} = useMyEvents()
  function displayEvents() {
    if (loading) {

      return <div>Loading...</div>
    }
    if (events.length === 0) {
      return <div>No events to display</div>
    }
    return events.map((event,idx) => {
      return <EventCardSmall key={idx}
        {...event} />
    })
  }
  return (
    <>

      <div className="md:flex  bg-gray-100 h-screen mt-4 w-full">
        <div className="flex flex-col md:w-1/3">
          <UserProfileSmall />
          <div className="shadow rounded mt-4 ml-2 mr-2 justify-center h-80 overflow-y-scroll bg-gray-100">
            <h1 className="text-2xl p-2 font-bold shadow bg-white w-full sticky top-0 pl-4">
              Registrations
            </h1>
            <div className="pr-4 border-4  divide-solid">{displayEvents()}</div>
          </div>
        </div>
        <div className="md:w-2/3 mt-2 overflow-y-scroll">
          <EventTabs />
        </div>
      </div>
      <footer className="h-16 "></footer>
    </>
  );
}
