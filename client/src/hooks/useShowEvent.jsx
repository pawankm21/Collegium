import { useState, useEffect } from "react";

function useShowEvent(id) {
  const [data, setData] = useState({
    name: "",
    message: "",
    coordinators: [],
    when: Date(),
    lastDate: Date(),
    where: "",
    attendees: [],
    tags: [],
    imageurl: "",
    type: "",
    image_id: "",
    tillWhen: "",
  });
  const [canEdit, setCanEdit] = useState(false);
  function getData() {
    fetch(`http://localhost:9000/Event/getEvent/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);

        if (json.coordinators.includes(sessionStorage.getItem("id"))) {
          setCanEdit(true);
        } else {
          setCanEdit(false);
        }
      });
  }

  useEffect(() => {
   getData();
  }, []);
  return { canEdit, data };
}

export default useShowEvent;
