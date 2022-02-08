import { useState } from "react";

export default function useUpdateUser() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [roll, setRoll] = useState(null);
  const [branch, setBranch] = useState(null);
  const [college, setCollege] = useState(null);
  const [image, setImage] = useState(null);
  const [imageurl, setImageUrl] = useState(null);

  function formSubmitHandler(event, image) {
    setLoading(true);
    event.preventDefault();
    if (password !== passwordConfirm) {
      window.alert("Passwords do not match");
      return;
    }
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "upload");
    formData.append("cloud_name", "collegium12");
    fetch("https://api.cloudinary.com/v1_1/collegium12/image/upload", {
      method: "post",
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data.url);
        setImageUrl(data.url);
        var user = [
          { propName: "name", value: name },
          { propName: "email", value: email },
          { propName: "roll", value: roll },
          { propName: "college", value: college },
          { propName: "password", value: password },
          { propName: "branch", value: branch },
          { propName: "imageurl", value: data.url },
        ];
         user = user.filter((u) => u.value !== null && u.value !== "");
        console.log(user);
        fetch(
          `${
            process.env.REACT_APP_SERVER_URL
          }/User/updateUser/${sessionStorage.getItem("id")}`,
          {
            method: "PATCH",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((json) => {
            setLoading(false);
            window.alert(json.message);
          });
      });
  }

  return {
    formSubmitHandler,
    setName,
    setEmail,
    setPassword,
    setPasswordConfirm,
    setRoll,
    setBranch,
    setCollege,
    setImage,
    imageurl,
    image,
    loading,
  };
}
