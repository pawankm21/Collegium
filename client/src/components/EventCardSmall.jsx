import Modal from "./Modal";

const EventCardSmall = (props) => {
  const eventName = "Event Name";
  const eventDate = "08 Jun 2021";

  return (
    <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 bg-yellow-300 p-3 ">
          <div className=" text-lg">{eventName}</div>
          <div className="">{eventDate}</div>
        </div>
 
    </div>
  );
};
export default EventCardSmall;
