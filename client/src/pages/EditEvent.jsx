import useUpdateEvent from "../hooks/useUpdateEvent";
import { classNames } from "../components/utilities";
import { parseTags } from "../components/utilities";
import DateTimePicker from "react-datetime-picker";
import { CalendarIcon } from "@heroicons/react/solid";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../css/Markdown.css";
import "../css/DateTimePicker.css";
import useShowEvent from "../hooks/useShowEvent";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import LoadingModal from "../components/LoadingModal";
function EditEvent() {
  const { id } = useParams();
  const { data } = useShowEvent(id);
  const editEvent = useUpdateEvent(id);
  return (
    <>
      <LoadingModal
        loading={editEvent.loading}
        setLoading={editEvent.setLoading}
        showButton={false}
      />
      <div className="m-5 shadow divide-y divide-gray-700 p-4 bg-white ">
        <h1 className="text-center capitalize font-bold text-gray-800 text-3xl mt-10 mb-10 ">
          Edit Event
        </h1>
        <form onSubmit={editEvent.formSubmitHandler}>
          <div className="lg:grid grid-cols-2 gap-4 ">
            <div className="col-span-1 pointer-events-auto">
              <div className=" w-full  bg-gray-400 justify-center h-56 border-2 border-dashed rounded-xl border-gray-700 mt-5 pointer-events-auto relative">
                <div
                  className={classNames(
                    data.imageurl ? "opacity-30 " : "hidden",
                    "bg-cover bg-center w-full absolute h-56"
                  )}
                >
                  <img
                    src={
                      editEvent.banner
                        ? URL.createObjectURL(editEvent.banner)
                        : data.imageurl
                    }
                    className="h-full w-full"
                    alt={editEvent.banner ? editEvent.banner.name : ""}
                  />
                </div>
                <input
                  type="file"
                  className=" opacity-0 w-full h-full focus:ring-2 ring-blue-400 outline-none"
                  onChange={(e) => {
                    // console.log(editEvent.banner)
                    editEvent.setBanner(e.target.files[0]);
                  }}
                  defaultValue={data.imageurl}
                />
                <div className="pointer-events-none text-center relative bottom-24 text-gray-600">
                  Upload Image
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-5">
              <label className="text-gray-800">Event Name</label>
              <input
                className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none "
                type="text"
                placeholder="Event Name"
                name="eventName"
                onChange={(e) => editEvent.setName(e.target.value)}
                defaultValue={data.name}
              />{" "}
              <label className="text-gray-800">Event Starts on</label>
              <DateTimePicker
                calendarIcon={<CalendarIcon className="w-6 h-6" />}
                className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none date-time-picker"
                onChange={editEvent.setWhen}
                value={editEvent.when}
                name="eventStartsOn"
                showLeadingZeros={true}
                monthPlaceholder="mm"
                minutePlaceholder="mins"
                hourPlaceholder="hrs"
                dayPlaceholder="dd"
                yearPlaceholder="yyyy"
              />
              <label className="text-gray-800">Event Ends on</label>
              <DateTimePicker
                calendarIcon={<CalendarIcon className="w-6 h-6" />}
                className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none date-time-picker"
                onChange={editEvent.settillWhen}
                value={editEvent.tillWhen}
                name="eventEndsDate"
                showLeadingZeros={true}
                monthPlaceholder="mm"
                minutePlaceholder="mins"
                hourPlaceholder="hrs"
                dayPlaceholder="dd"
                yearPlaceholder="yyyy"
              />
              <label className="text-gray-800">Deadline</label>
              <DateTimePicker
                calendarIcon={<CalendarIcon className="w-6 h-6" />}
                className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none date-time-picker"
                onChange={editEvent.setLastDate}
                value={editEvent.lastDate}
                name="deadline"
                showLeadingZeros={true}
                monthPlaceholder="mm"
                minutePlaceholder="mins"
                hourPlaceholder="hrs"
                dayPlaceholder="dd"
                yearPlaceholder="yyyy"
              />
            </div>
            <div className="col-span-1 mt-5">
              <label className="text-gray-800">Add tags</label>
              <textarea
                className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none"
                type="search"
                placeholder="add tags separated by commas, eg. Women-Only, Students-Only...."
                name="eventName"
                onChange={(e) => {
                  editEvent.setTags(parseTags(e.target.value));
                }}
                defaultValue={data.tags.join(", ")}
              />
            </div>{" "}
            <div className="col-span-1 mt-5">
              <label className="text-gray-800">Add Coordinators</label>
              <textarea
                className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none"
                type="text"
                placeholder="Add coordinator names separated by commas, eg. John, Mary, Sam...."
                name="eventName"
                onChange={(e) => {
                  editEvent.setCoordinators(parseTags(e.target.value));
                }}
              />
            </div>
            <div className="col-span-2 mt-5">
              <label className="text-gray-800 text-lg  m-auto">Venue</label>
              <textarea
                className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none"
                type="text"
                cols="10"
                rows="3"
                name="Address"
                onChange={(e) => editEvent.setWhere(e.target.value)}
                defaultValue={data.where}
              />
            </div>
            <div className="col-span-1 mt-5">
              <label className="text-gray-800 text-lg font-bold  m-auto">
                Message
              </label>
              <textarea
                className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none h-full"
                type="text"
                rows="15"
                name="eventName"
                placeholder="Markdown supported here, eg. #Event Name, ##Event Name, **Event Name**, *Event Name*, [Event Name](https://www.google.com)"
                onChange={(e) => editEvent.setMessage(e.target.value)}
                defaultValue={data.message}
              />
            </div>
            <div className="col-span-1 mt-5">
              <label className="text-gray-800 text-lg font-bold m-auto">
                Preview
              </label>
              <div className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none h-full">
                <ReactMarkdown
                  className="markdown-body"
                  children={editEvent.message}
                  remarkPlugins={[remarkGfm]}
                />
              </div>
            </div>
          </div>
          <div className="w-full text-center mt-12">
            <button
              type="submit"
              className="w-1/2 m-5 p-4 text-lg rounded-md bg-blue-500 text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default EditEvent;
