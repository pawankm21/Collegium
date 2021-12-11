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
    try {
       const response = await fetch(
         `http://localhost:9000/Event/createEvent/${id}`,
         {
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
         }
       );
       const data = await response.json();
      window.alert(data.message);
      const addCoordinator = await fetch(`http://localhost:9000/Event/addCoordinator/${data.id}`, {
        method: "POST",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data2 = await addCoordinator.json();
      window.alert(data2.message);
    }
    catch (err)
    {
      window.alert(err);
    }
   
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
