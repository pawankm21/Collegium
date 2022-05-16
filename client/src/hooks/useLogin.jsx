import { useRef, useState, } from "react";
function useLogin() {

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const dummyFill =  () => {
     emailRef.current.focus();
     emailRef.current.value = "test@mail.com";
     passwordRef.current.value = "test";
  
  }
  const submitHandler = async (event) => {
    setLoading(true);
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
      setLoading(false);
      if (data.user) {
        setModalMessage("Login Successful!");
        sessionStorage.setItem("id", data.user);
        window.location.href="/";
      } else {
        setModalMessage("Email or Password incorrect.");
      }
    }
  };
  return {
    emailRef,
    passwordRef,
    submitHandler,
    loading,
    modalMessage,
    setLoading,
    dummyFill,
  };
}

export default useLogin;
