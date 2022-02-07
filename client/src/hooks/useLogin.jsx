
import { useRef } from "react";
function useLogin() {
  
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const submitHandler = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/User/login`,
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      if (data.user) {
        alert("Log in successfull");
        sessionStorage.setItem("id", data.user);
        window.location.href = "/";
      } else {
        alert("Email or Password incorrect.");
      }
    }
  };
    return {emailRef, passwordRef, submitHandler};
}

export default useLogin
