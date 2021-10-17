import React from 'react'
import Tags from './tags'
import { Link } from 'react-router-dom'
export default function EventCard(props)  {
    return (
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
                <div class="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-48" src={props.imageurl} alt="Event "/>
                </div>
                <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Ends in 3 days</div>
                <Link to="#"  class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{props.name}</Link>
                <p class="mt-2 text-gray-500">{props.message}</p>
                <Tags tags = {props.tags}/>
                </div>
            </div>
        </div>
    )
}
