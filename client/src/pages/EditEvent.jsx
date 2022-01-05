import React from 'react'
import Navbar from '../components/Navbar';
function EditEvent() {
    return (
      <>
        <Navbar />
        <div className="m-5 shadow divide-y divide-gray-700 p-4 bg-white ">
          <h1 className="text-center capitalize font-bold text-gray-800 text-3xl mt-10 mb-10 ">
            Create Event
          </h1>
          <form onSubmit={(e) => {}}>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="col-span-1 pointer-events-auto">
                <div className=" w-full  bg-gray-400 justify-center h-56 border-2 border-dashed rounded-xl border-gray-700 mt-5 pointer-events-auto">
                  <input
                    type="file"
                    className=" opacity-0 w-full h-full focus:ring-2 ring-blue-400 outline-none"
                  />
                  <div className="pointer-events-none text-center relative bottom-24 text-gray-600">
                    Click or drag here to add file
                  </div>
                </div>
              </div>
              <div className="col-span-1 mt-5">
                <label className="text-gray-800">Event Name</label>
                <input
                  className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none"
                  type="text"
                  placeholder="Event Name"
                  name="eventName"
                  required
                  onChange={(e) => setName(e.target.value)}
                />{" "}
                <label className="text-gray-800">Event Ends on</label>
                <input
                  className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none"
                  type="datetime-local"
                  placeholder="28 June 2021"
                  name="eventEndDate"
                  required
                  onChange={(e) => setEndingDate(e.target.value)}
                />{" "}
                <label className="text-gray-800">Event Starts on</label>
                <input
                  className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none"
                  type="datetime-local"
                  placeholder="27 June 2021"
                  name="eventDate"
                  required
                  onChange={(e) => setWhen(e.target.value)}
                />{" "}
                <label className="text-gray-800">Deadline</label>
                <input
                  className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none"
                  type="datetime-local"
                  placeholder="Registrations open till..."
                  name="deadline"
                  required
                  onChange={(e) => setLastDate(e.target.value)}
                />
              </div>
              <div className="col-span-1 mt-5">
                <label className="text-gray-800">Add tags</label>
                <textarea
                  className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none"
                  type="search"
                  placeholder="add tags separated by commas, eg. Women-Only, Students-Only...."
                  name="eventName"
                  required
                  onChange={(e) => {
                    setTags(parseTags(e.target.value));
                  }}
                />
              </div>{" "}
              <div className="col-span-1 mt-5">
                <label className="text-gray-800">Add Coordinators</label>
                <textarea
                  className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none"
                  type="text"
                  placeholder="Add collegium usernames separated by commas, eg. Noobmaster69, john123,..."
                  name="eventName"
                  required
                />
              </div>
              <div className="col-span-1 mt-5">
                <label className="text-gray-800 text-lg  m-auto">Address</label>
                <textarea
                  className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none"
                  type="text"
                  cols="10"
                  rows="3"
                  name="Address"
                  required
                  onChange={(e) => setWhere(e.target.value)}
                />
              </div>
              <div className="col-span-2 mt-5">
                <label className="text-gray-800 text-lg font-bold  m-auto">
                  Message
                </label>
                <textarea
                  className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none"
                  type="text"
                  cols="30"
                  rows="10"
                  name="eventName"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full text-center">
              <button
                type="submit"
                className="w-1/2 m-5 p-4 text-lg rounded-md bg-blue-500 text-white hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
    
}

export default EditEvent
