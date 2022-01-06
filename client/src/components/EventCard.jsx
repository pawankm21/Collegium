import React from "react";
import Tags from "./Tags";
import { Link } from "react-router-dom";
import { classNames, formatDate, leftDays } from "./utilities";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
export default function EventCard({
  name,
  tags,
  imageurl,
  lastDate,
  type,
  _id,
  when,
  tillWhen,
}) {

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="">
          <img
            className="h-full w-full object-cover md:w-48"
            src={imageurl}
            alt="Event "
          />
        </div>
        <div className="p-8">
          <div className={classNames(" tracking-wide text-sm text-white text-center p-2 rounded-2xl shadow font-semibold",leftDays(lastDate).color)}>
            {leftDays(lastDate).message} 
          </div>
          <Link
            to={`events/${_id}`}
            className="block mt-1 text-lg font-bold capitalize text-black hover:underline"
          >
            {name}
          </Link>
          <div className="mt-2 text-gray-600 font-bold">
            <span className="text-blue-700">{formatDate(when)} <ArrowNarrowRightIcon className="w-4 text-gray-900 inline"/> {formatDate(tillWhen) }</span>
          </div>
        </div>
        <Tags tags={tags} />
      </div>
    </div>
  );
}
