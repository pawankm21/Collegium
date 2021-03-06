import { useState } from "react";

function useUpdateEvent(id) {
  const [name, setName] = useState(null);
  const [coordinators, setCoordinators] = useState(null);
  const [tillWhen, settillWhen] = useState(null);
  const [when, setWhen] = useState(null);
  const [message, setMessage] = useState(null);
  const [lastDate, setLastDate] = useState(null);
  const [tags, setTags] = useState(null);
  const [where, setWhere] = useState(null);
  const [banner, setBanner] = useState(null);
  const [bannerUrl, setBannerUrl] = useState(null);
  const [banner_id, setBanner_id] = useState(null);
  const [loading,setLoading]=useState(false);
  function formSubmitHandler(e) {
    setLoading(true);
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
        setBanner_id(data.public_id);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        const event = [
          { propName: "name", value: name },
          { propName: "tillWhen", value: tillWhen },
          { propName: "when", value: when },
          { propName: "message", value: message },
          { propName: "lastDate", value: lastDate },
          { propName: "where", value: where },
          { propName: "tags", value: tags },
          { propName: "coordinators", value: coordinators },
          { propName: "imageurl", value: bannerUrl },
          { propName: "image_id", value: banner_id },
        ];
        const ops = event.filter((op) => op.value != null);
        console.log(ops);
        fetch(`${process.env.REACT_APP_SERVER_URL}/Event/updateEvent/${id}`, {
          method: "PATCH",
          body: JSON.stringify(ops),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((json) => {
            setLoading(false);
            window.alert(json.message)
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
    setCoordinators,
    setWhere,
    setBanner,
    setBannerUrl,
    formSubmitHandler,
    setLoading,
    bannerUrl,
    banner,
    when,
    tillWhen,
    lastDate,
    tags,
    where,
    name,
    message,
    loading,
  };
}

export default useUpdateEvent;
