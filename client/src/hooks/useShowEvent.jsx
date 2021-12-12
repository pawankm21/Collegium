import { useState, useEffect } from "react";

function useShowEvent(id) {
  const [data, setData] = useState({
    name: String,
    message: String,
    coordinators: [],
    when: Date,
    lastDate: Date,
    where: String,
    attendees: [],
    tags: [],
    imageurl: String,
    type: String,
  });
  const [canEdit, setCanEdit] = useState(false);
  async function getData() {
    const response = await fetch(
      `http://localhost:9000/Event/getEvent/61a90d8744e83b6a1d3a2503`
    );

    const json = await response.json();
    console.log(json);
    setData(json);
    for (let id in json.coordinators) {
      if (id === localStorage.getItem("id")) {
        setCanEdit(true);
        break;
      } else {
        setCanEdit(false);
      }
    }
  }
  useEffect(() => {
    getData();
  }, [id]);
  return { canEdit, data };
}

export default useShowEvent;
