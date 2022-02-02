import { useState } from "react";
import { useHistory } from "react-router-dom";
function useCreateEvent() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [tillWhen, settillWhen] = useState("");
  const [when, setWhen] = useState("");
  const [message, setMessage] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [tags, setTags] = useState([]);
  const [where, setWhere] = useState("");
  const [coordinators, setCoordinators] = useState([]);
  const [tagline, setTagline] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  function createEvent(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "upload");
    formData.append("cloud_name", "collegium12");
    fetch("https://api.cloudinary.com/v1_1/collegium12/image/upload", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const event = {
          name,
          tillWhen,
          when,
          message,
          lastDate,
          tags,
          where,
          coordinators,
          tagline,
          type,
          imageurl: data.url,
          image_id: data.public_id,
        };
        fetch(
          `http://localhost:9000/Event/createEvent/${sessionStorage.getItem(
            "id"
          )}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(event),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            fetch(`http://localhost:9000/Event/addCoordinator/${data.id}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: sessionStorage.getItem("id"),
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                window.alert(data.message);
                history.replace("/");
              });
          })
          .catch((err) => {
            // console.log(err);
          });
      });
  }

  return {
    setName,
    settillWhen,
    setWhen,
    setMessage,
    setLastDate,
    setTags,
    setWhere,
    createEvent,
    setImage,
    setCoordinators,
    setTagline,
    setType,
    image,
    where,
    name,
    tillWhen,
    when,
    message,
    lastDate,
    tags,
  };
}

export default useCreateEvent;
