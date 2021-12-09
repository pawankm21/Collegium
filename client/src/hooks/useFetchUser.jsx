import { useState, useEffect } from "react";

function useFetchUser() {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [roll, setRoll] = useState("");
  const [branch, setBranch] = useState("");
  const id = localStorage.getItem("id");
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
  };
}

export default useFetchUser;
