import { useState, useEffect } from "react";

function useUpdateEvent(id) {
  const [name, setName] = useState(null);
  const [tillWhen, settillWhen] = useState(null);
  const [when, setWhen] = useState(null);
  const [message, setMessage] = useState(null);
  const [lastDate, setLastDate] = useState(null);
  const [tags, setTags] = useState([]);
  const [where, setWhere] = useState(null);
  const [coordinators, setCoordinators] = useState([]);
  const [banner, setBanner] = useState(null);
  const [bannerUrl, setBannerUrl] = useState(null);
  function formSubmitHandler(e) {
    e.preventDefault();
    const imageData = new FormData();
    imageData.append("file", banner);
    imageData.append("upload_preset", "upload");
    imageData.append("cloud_name", "collegium12");

    fetch("https://api.cloudinary.com/v1_1/collegium12/image/upload", {
      method: "POST",
      body: imageData,
    })
      .then((response) => response.json())
      .then((data) => {
        setBannerUrl(data.url);
        var event = [
          { propName: "name", value: name },
          { propName: "tillWhen", value: tillWhen },
          { propName: "when", value: when },
          { propName: "message", value: message },
          { propName: "lastDate", value: lastDate },
          { propName: "tags", value: tags },
          { propName: "where", value: where },
          { propName: "imageurl", value: data.url },
          { propName: "image_id", value: data.public_id },
        ];
        event = event.filter((e) => e.value !== null && e.value !== "" && e.value.length !== 0);
        fetch(`http://localhost:9000/Event/updateEvent/${id}`, {
          method: "PATCH",
          body: JSON.stringify(event),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((json) => window.alert(json.message));
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
    setCoordinators,
    setBanner,
    setBannerUrl,
    formSubmitHandler,
    bannerUrl,
    banner,
    when,
    tillWhen,
    lastDate,
    tags,
    where,
    coordinators,
    name,
    message,
  };
}

export default useUpdateEvent;
