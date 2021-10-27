import React from 'react'
import EventCard from './EventCard'
import EventCardSmall from './EventCardSmall'
import Navbar from './Navbar';
export default function Dashboard() {
    return (
      <>
        <Navbar />
        {/* <EventCard /> */}
            <div className="grid grid-cols-3">
                
          <EventCardSmall  />
       
        </div>
      </>
    );
}
