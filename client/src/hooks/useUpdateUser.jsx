import { useState } from "react";

export default function useUpdateUser() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [roll, setRoll] = useState(null);
  const [branch, setBranch] = useState(null);
  const [college, setCollege] = useState(null);
  var user = [
    { propName: "name", value:  name},
    { propName: "email", value: email },
    { propName: "roll", value: roll },
    { propName: "college", value: college },
    { propName: "password", value: password},
    { propName: "branch", value: branch },
  ];
   user=user.filter((u) => u.value !== null&&u.value !== "");

  async function formSubmitHandler(event) {
    event.preventDefault();
    if (password !== passwordConfirm ) {
      window.alert("Passwords do not match");
      return;
    }

    const response = await fetch(
      `http://localhost:9000/User/updateUser/${localStorage.getItem("id")}`,
      {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    window.alert(data.message);
  }

  return {
    formSubmitHandler,
    setName,
    setEmail,
    setPassword,
    setPasswordConfirm,
    setIsLoading,
    setRoll,
    setBranch,
    setCollege,
  }
}
