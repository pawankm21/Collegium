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
      `http://localhost:9000/Event/getEvent/${id}`
    );

    const json = await response.json();
    console.log(json);
    setData(json);
    for (let userId in json.coordinators) {
      if (userId === localStorage.getItem("id")) {
        setCanEdit(true);
      }
    }
  }
  useEffect(() => {
    getData();
  }, [id]);
  return { canEdit, data };
}

export default useShowEvent;
