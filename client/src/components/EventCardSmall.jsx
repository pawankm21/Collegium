import { Link } from "react-router-dom";
import { formatDate } from "./utilities";
function EventCardSmall(props) {
  return (
    <div className="bg-white  w-full  shadow rounded-md m-2 flex hover:shadow-lg transition duration-300 ease-in-out ">
      <Link to={`/events/${props._id}`} className="w-full">
        <div className="grid grid-cols-2 gap-4 p-3 ">
          <div className=" text-lg">{props.name}</div>
          <div className="">{formatDate(props.when)}</div>
        </div>
      </Link>
    </div>
  );
}
export default EventCardSmall;
