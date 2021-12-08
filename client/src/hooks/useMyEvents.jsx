import { useEffect, useState } from "react";

function useMyEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getMyEvents() {
    const response = await fetch(
      `http://localhost:9000/Event/getEvent/attendee/${localStorage.getItem(
        "id"
      )}`
    );
    const data = await response.json();
    setEvents(data);
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true);
    getMyEvents();
  }, []);
  return { events, loading };
}

export default useMyEvents;
