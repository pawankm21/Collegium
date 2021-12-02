import React from 'react'
import Tags from './Tags'
import { Link } from 'react-router-dom'
export default function EventCard({ name, message, tags, imageUrl, }) {
    var id = 1;
    return (
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
                <div class="">
                <img className="h-full w-full object-cover md:w-48" src={ imageUrl} alt="Event "/>
                </div>
                <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Ends in 3 days</div>
                <Link to={`events/${id}`}  class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{ name}</Link>
                <p class="mt-2 text-gray-500">{ message}</p>
                <Tags tags = { tags}/>
                </div>
            </div>
        </div>
    )
}
