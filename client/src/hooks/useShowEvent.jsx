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
  const [loading, setLoading] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  function getData() {
    setLoading(true);
    fetch(`${process.env.REACT_APP_SERVER_URL}/Event/getEvent/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
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
  return { canEdit, data, loading,setLoading };
}

export default useShowEvent;
