import React, { useState, useEffect } from "react";
//optimise this for performance by using hooks instead of calling api everytime
function useGetEvents() {
  const [events, setEvents] = useState([]);
  const [activeTab, setActiveTab] = useState("getEvent");
  async function getEvents() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/Event/${activeTab}`
      );
      const data = await response.json();
      // console.log(data);
      setEvents(data);
    } catch (err) {
      window.alert(err);
    }
  }
  useEffect(() => {
    return getEvents();
  }, [activeTab]);
  return { setActiveTab, events };
}

export default useGetEvents;
