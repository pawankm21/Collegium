import { useState } from "react";



function useCreateEvent() {
  const [name, setName] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [when, setWhen] = useState("");
  const [message, setMessage] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [tags, setTags] = useState([]);
  const [where, setWhere] = useState("");

  async function createEvent(event) {
    event.preventDefault();
    const id = localStorage.getItem("id");
    await fetch(`http://localhost:9000/Event/createEvent/${id}`, {
      method: "POST",
      body: JSON.stringify({
        name,
        message,
        coordinators: [id],
        when,
        lastDate,
        where,
        // tags,
        attendees: [],
        endingDate,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => window.alert(data.message))
      .catch((err) => window.alert(err));
  }
  return {
    setName,
    setEndingDate,
    setWhen,
    setMessage,
    setLastDate,
    setTags,
    setWhere,
    createEvent,
  };
}

export default useCreateEvent;
