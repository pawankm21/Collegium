import React, { useState, useEffect } from "react";

function useGetEvents() {
  const [events, setEvents] = useState([]);
  const [activeTab, setActiveTab] = useState("getEvent");
  async function getEvents() {
    try {
      const response = await fetch("http://localhost:9000/Event/" + activeTab);
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      window.alert(err);
    }
    }
    useEffect(() => {
        getEvents();

    },[activeTab]);
  return { setActiveTab, events };
}

export default useGetEvents;
