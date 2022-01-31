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
    image_id:String,
  });
  const [canEdit, setCanEdit] = useState(false);
  function getData() {
    fetch(`http://localhost:9000/Event/getEvent/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);

        if (json.coordinators.includes(localStorage.getItem("id"))) {
          setCanEdit(true);
        } else {
          setCanEdit(false);
        }
      });
  }

  useEffect(() => {
    return getData();
  }, []);
  return { canEdit, data };
}

export default useShowEvent;
