import { useState, useEffect } from "react";

function useFetchUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [roll, setRoll] = useState("");
  const [branch, setBranch] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profile_id, setProfile_id] = useState("");
  const [firstloading, setFirstLoading] = useState(false);
  function fetchUser() {
    setFirstLoading(true);
    fetch(
      `${
        process.env.REACT_APP_SERVER_URL
      }/User/getUser/${sessionStorage.getItem("id")}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setUsername(json.name);
        setEmail(json.email);
        setCollege(json.college);
        setRoll(json.roll);
        setBranch(json.branch);
        setProfileImage(
          json.imageurl
            ? json.imageurl
            : "https://res.cloudinary.com/collegium12/image/upload/v1643635155/149071_omrq4m.png"
        );
        setProfile_id(json.image_id);
        setFirstLoading(false);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchUser();
  }, []);
  return {
    username,
    email,
    college,
    roll,
    branch,
    profileImage,
    firstloading,
    setFirstLoading
  };
}

export default useFetchUser;
