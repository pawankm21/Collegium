
import { useRef } from "react";
import {  useHistory } from "react-router-dom";
function useLogin() {
    const history = useHistory();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const submitHandler = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const response = await fetch("http://localhost:9000/User/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      if (data.user) {
        alert("Log in successfull");
        localStorage.setItem("id", data.user);
        history.replace("/dashboard");
      } else {
        alert("Email or Password incorrect.");
      }
    }
  };
    return {emailRef, passwordRef, submitHandler};
}

export default useLogin