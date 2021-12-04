import { Link } from "react-router-dom";

const EventCardSmall = (props) => {
  const eventName = "Event Name";
  const eventDate = "08 Jun 2021";

  return (
    <div className="bg-white  w-full  shadow rounded-md m-2 flex hover:shadow-lg transition duration-300 ease-in-out ">
      <Link className="w-full" >
        <div className="grid grid-cols-2 gap-4 p-3 ">
          <div className=" text-lg">{eventName}</div>
          <div className="">{eventDate}</div>
        </div>
      </Link>
    </div>
  );
};
export default EventCardSmall;
