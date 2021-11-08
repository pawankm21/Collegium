import React from 'react'
import EventCard from './EventCard';
function YourEvents() {
    return (
      <div>
        <div className="mt-2 m-1 mb-2   ">
          <EventCard
            imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
            name="hello world"
            message=" lorem ipsum dolores"
            tags={["lorem", "ipsum", "dolores"]}
          />
        </div>{" "}
        <div className="mt-2 m-1 mb-2   ">
          <EventCard
            imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
            name="hello world"
            message=" lorem ipsum dolores"
            tags={["lorem", "ipsum", "dolores"]}
          />
        </div>{" "}
        <div className="mt-2 m-1 mb-2   ">
          <EventCard
            imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
            name="hello world"
            message=" lorem ipsum dolores"
            tags={["lorem", "ipsum", "dolores"]}
          />
        </div>{" "}
        <div className="mt-2 m-1 mb-2   ">
          <EventCard
            imageUrl="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
            name="hello world"
            message=" lorem ipsum dolores"
            tags={["lorem", "ipsum", "dolores"]}
          />
        </div>{" "}
      </div>
    );
}

export default YourEvents
