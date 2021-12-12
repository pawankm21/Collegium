import { useState, useEffect } from "react";

function useFetchUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [roll, setRoll] = useState("");
  const [branch, setBranch] = useState("");
  const fetchUser = async () => {
    if (localStorage.getItem("id") === null) return;
    const response = await fetch(
      `http://localhost:9000/User/getUser/${localStorage.getItem("id")}`
    );
    if (response.ok) {
      const data = await response.json();
      setUsername(data.name);
      setEmail(data.email);
      setCollege(data.college);
      setRoll(data.roll);
      setBranch(data.branch);
    }
    else {
      window.alert("Error");
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return {
    username,
    email,
    college,
    roll,
    branch,
    setBranch,
    setCollege,
    setEmail,
    setRoll,
    setUsername,
  };
}

export default useFetchUser;
