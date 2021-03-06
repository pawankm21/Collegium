import useCreateEvent from "../hooks/useCreateEvent";
import { classNames } from "../components/utilities";
import { parseTags } from "../components/utilities";
import DateTimePicker from "react-datetime-picker";
import { CalendarIcon } from "@heroicons/react/solid";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../css/Markdown.css";
import "../css/DateTimePicker.css";
import Footer from "../components/Footer";
import LoadingModal from "../components/LoadingModal";
function NewEvent() {
  const {
    setName,
    settillWhen,
    setWhen,
    setMessage,
    setLastDate,
    setTags,
    setWhere,
    createEvent,
    setImage,
    setCoordinators,
    setType,
    setLoading,
    loading,
    image,
    message,
    when,
    tillWhen,
    lastDate,
  } = useCreateEvent();
  return (
    <>
      {<LoadingModal loading={loading} setLoading={setLoading} showButton={false} />}
      <div className="m-5 shadow divide-y divide-gray-700 p-4 bg-white ">
        <h1 className="text-center capitalize font-bold text-blue-900 text-3xl mt-10 mb-10 ">
          Create Event
        </h1>
        <form
          onSubmit={(e) => {
            createEvent(e);
          }}
        >
          <div className="lg:grid grid-cols-2 gap-4 ">
            <div className="col-span-1 pointer-events-auto">
              <div className=" w-full  bg-blue-400 justify-center h-56 border-2 border-dashed rounded-xl border-gray-700 mt-5 pointer-events-auto relative">
                <div
                  className={classNames(
                    image ? "opacity-30 " : "hidden",
                    "bg-cover bg-center w-full absolute h-56"
                  )}
                >
                  <img
                    src={image ? URL.createObjectURL(image) : ""}
                    className="h-full w-full"
                    alt={image ? image.name : ""}
                  />
                </div>
                <input
                  type="file"
                  className=" opacity-0 w-full placeholder:text-blue-900  h-full focus:ring-2 ring-blue-400 outline-none"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
                <div className="pointer-events-none text-center relative bottom-24 text-blue-600">
                  {image !== "" ? image.name : "Upload Image"}
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-5">
              <label className="text-blue-900">Event Name</label>
              <input
                className="border border-gray-400 placeholder:text-blue-900  p-2 rounded-sm bg-b-100 w-full focus:ring-2 ring-blue-400 bg-neutral-100 outline-none "
                type="text"
                placeholder="Event Name"
                name="eventName"
                required
                onChange={(e) => setName(e.target.value)}
              />{" "}
              <label className="text-blue-900">Event Starts on</label>
              <DateTimePicker
                calendarIcon={<CalendarIcon className="w-6 h-6" />}
                className="border border-gray-400 p-2 rounded-sm bg-neutral-100 w-full focus:ring-2 ring-blue-400 outline-none placeholder:text-blue-900  date-time-picker text-blue-900"
                onChange={setWhen}
                value={when}
                name="eventStartsOn"
                showLeadingZeros={true}
                required
                monthPlaceholder="mm"
                minutePlaceholder="mins"
                hourPlaceholder="hrs"
                dayPlaceholder="dd"
                yearPlaceholder="yyyy"
              />
              <label className="text-blue-900">Event Ends on</label>
              <DateTimePicker
                calendarIcon={<CalendarIcon className="w-6 h-6" />}
                className="border border-gray-400 p-2 placeholder:text-blue-900  rounded-sm bg-neutral-100 w-full focus:ring-2 ring-blue-400 outline-none date-time-picker text-blue-900"
                onChange={settillWhen}
                value={tillWhen}
                name="eventEndsDate"
                showLeadingZeros={true}
                required
                monthPlaceholder="mm"
                minutePlaceholder="mins"
                hourPlaceholder="hrs"
                dayPlaceholder="dd"
                yearPlaceholder="yyyy"
              />
              <label className="text-blue-900">Deadline</label>
              <DateTimePicker
                calendarIcon={<CalendarIcon className="w-6 h-6" />}
                className="border border-gray-400 p-2  placeholder:text-blue-900 rounded-sm bg-neutral-100 w-full focus:ring-2 ring-blue-400 outline-none date-time-picker text-blue-900"
                onChange={setLastDate}
                value={lastDate}
                name="deadline"
                showLeadingZeros={true}
                required
                monthPlaceholder="mm"
                minutePlaceholder="mins"
                hourPlaceholder="hrs"
                dayPlaceholder="dd"
                yearPlaceholder="yyyy"
              />
            </div>
            <div className="col-span-1 mt-5">
              <label className="text-blue-900">Add tags</label>
              <textarea
                className="border border-gray-400 p-2 placeholder:text-blue-900  rounded-sm bg-neutral-100 w-full focus:ring-2 ring-blue-400 outline-none"
                type="search"
                placeholder="add tags separated by commas, eg. Women-Only, Students-Only...."
                name="eventName"
                onChange={(e) => {
                  setTags(parseTags(e.target.value));
                }}
              />
            </div>{" "}
            <div className="col-span-1 mt-5">
              <label className="text-blue-900">Add Coordinators</label>
              <textarea
                className="border border-gray-400 p-2 placeholder:text-blue-900  rounded-sm bg-neutral-100 w-full focus:ring-2 ring-blue-400 outline-none"
                type="text"
                placeholder="Add coordinator by email separated by commas, eg. john@mail.com, doe@gmail.com...." 
                name="eventName"
              />
            </div>
            <div className="col-span-2 mt-5">
              <label className="text-blue-900 text-lg  m-auto">Venue</label>
              <textarea
                className="border border-gray-400 p-2 placeholder:text-blue-900  rounded-sm bg-neutral-100 w-full focus:ring-2 ring-blue-400 outline-none"
                type="text"
                cols="10"
                rows="3"
                name="Address"
                required
                onChange={(e) => setWhere(e.target.value)}
              />
            </div>
            <div className="col-span-1 mt-5">
              <label className="text-blue-900 text-lg font-bold  m-auto">
                Message
              </label>
              <textarea
                className="border border-gray-400 placeholder:text-blue-900  p-2 rounded-sm bg-neutral-100 w-full focus:ring-2 ring-blue-400 outline-none h-full"
                type="text"
                rows="15"
                name="eventName"
                placeholder="Markdown supported here, eg. #Event Name, ##Event Name, **Event Name**, *Event Name*, [Event Name](https://www.google.com)"
                required
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="col-span-1 mt-5">
              <label className="text-blue-900 text-lg font-bold m-auto">
                Preview
              </label>
              <div className="border border-gray-400 p-2 rounded-sm bg-neutral-100 w-full focus:ring-2 ring-blue-400 outline-none h-full">
                <ReactMarkdown
                  className="markdown-body"
                  children={message}
                  remarkPlugins={[remarkGfm]}
                />
              </div>
            </div>
          </div>
          <div className="w-full text-center mt-12">
            <button
              type="submit"
              className="w-1/2 m-5 p-4 text-lg rounded-md bg-blue-900 text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default NewEvent;
