import { Link } from "react-router-dom";
import { formatDate } from "./utilities";
// import {ClockIcon}
function EventCardSmall(props) {
  return (
    <div className="  w-full  shadow rounded-md m-2 flex hover:shadow-2xl transition duration-300 ease-in-out">
      <Link
        to={`/events/${props._id}`}
        className="w-full bg-blue-900 rounded-md "
      >
        <div className="grid grid-flow-col gap-4 p-3 place-items-center ">
          <div className=" bg-white font-semibold text-lg  p-2 rounded shadow text-blue-900">
            {props.name}
          </div>
          <div className="text-sm rounded p-2 font-bold text-white">
            {formatDate(props.when)}
          </div>
        </div>
      </Link>
    </div>
  );
}
export default EventCardSmall;
