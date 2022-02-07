import { useEffect, useState } from "react";

function useMyEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getMyEvents() {
    const response = await fetch(
      `${
        process.env.REACT_APP_SERVER_URL
      }/Event/attendee/${sessionStorage.getItem("id")}`
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
