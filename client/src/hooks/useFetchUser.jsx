import { useState, useEffect } from "react";

function useFetchUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [roll, setRoll] = useState("");
  const [branch, setBranch] = useState("");
  const [profileImage, setProfileImage] = useState("");
  function fetchUser()
  {
    fetch(`http://localhost:9000/User/getUser/${localStorage.getItem("id")}`).then(
      (res) => res.json()
    ).then(
      (json) => {
        console.log(json);
        setUsername(json.name);
        setEmail(json.email);
        setCollege(json.college);
        setRoll(json.roll);
        setBranch(json.branch);
        setProfileImage(json.imageurl);
      }
    ).catch(
      (err) => console.log(err)
    )
    
  }
  useEffect(() => {
    fetchUser();
  }
    , [])
  return {
    username,
    email,
    college,
    roll,
    branch,
    profileImage,
  };
}

export default useFetchUser;
