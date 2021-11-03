import Modal from "./Modal";

const EventCardSmall = (props) => {
  const eventName = "Event Name";
  const eventDate = "08 Jun 2021";

  return (
    <div className="items-center w-full border-2 border-gray-700 rounded-md m-2">
        <div className="grid grid-cols-2 gap-4 p-3 ">
          <div className=" text-lg">{eventName}</div>
          <div className="">{eventDate}</div>
        </div>
 
    </div>
  );
};
export default EventCardSmall;
