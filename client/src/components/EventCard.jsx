import React from "react";
import Tags from "./Tags";
import { Link } from "react-router-dom";
import { formatDate } from "./utilities";
export default function EventCard({
  name,
  tags,
  imageurl,
  lastDate,
  type,
  _id,
  when,
}) {
  var leftDays = Math.floor(
    (new Date(lastDate) - new Date()) / (1000 * 60 * 60 * 24)
  );
  return (
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="">
          <img
            className="h-full w-full object-cover md:w-48"
            src={imageurl}
            alt="Event "
          />
        </div>
        <div class="p-8">
          <div class=" tracking-wide bg-blue-900 text-sm text-white text-center p-1 rounded-2xl shadow font-semibold">
            {leftDays} days left
          </div>
          <Link
            to={`events/${_id}`}
            class="block mt-1 text-lg font-bold capitalize text-black hover:underline"
          >
            {name}
          </Link>
          <div class="mt-2 text-gray-600 font-bold">
            <span className="text-blue-700"> {formatDate(when)}</span>
          </div>
        </div>
        <Tags tags={tags} />
      </div>
    </div>
  );
}
