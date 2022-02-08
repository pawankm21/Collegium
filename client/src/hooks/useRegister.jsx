import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

function useRegister() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dobRef = useRef();
  const rollRef = useRef();
  const genderRef = useRef();
  const branchRef = useRef();
  const confirmPassRef = useRef();
  const collegeRef = useRef();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const submitHandler = async (event) => {
    setLoading(true);
    event.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      roll: rollRef.current.value,
      password: passwordRef.current.value,
      dob: dobRef.current.value,
      gender: genderRef.current.value,
      branch: branchRef.current.value,
      college: collegeRef.current.value,
    };
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/User/createUser`,
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setLoading(false);
    if (response.ok) {
      const data = await response.json();
      if (data.status === "success") {
        alert(data.message);
        history.push("/login");
      } else {
        alert(data.message + " Email already exists");
      }
    }
  };
  return {
    nameRef,
    emailRef,
    passwordRef,
    dobRef,
    rollRef,
    genderRef,
    branchRef,
    confirmPassRef,
    collegeRef,
    submitHandler,
    loading,
  };
}

export default useRegister;
