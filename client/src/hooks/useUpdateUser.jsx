import { useRef } from "react";
export default function useUpdateUser() {
  const nameRef = useRef();
  const emailRef = useRef();
  const rollRef = useRef();
  const collegeRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const branchRef = useRef();

  const user = [
    { propsName: "name", ref: nameRef },
    { propsName: "email", ref: emailRef },
    { propsName: "roll", ref: rollRef },
    { propsName: "college", ref: collegeRef },
    { propsName: "password", ref: passwordRef },
    { propsName: "branch", ref: branchRef },
  ];

  async function formSubmitHandler(event) {
    event.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      window.AbortSignalalert("Passwords do not match");
      return;
    }

    const response = await fetch(
      `http://localhost:9000/User/updateUser${localStorage.getItem("id")}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    window.alert(data.message);
  }
  return {
    user,
    formSubmitHandler,
    nameRef,
    emailRef,
    rollRef,
    collegeRef,
    passwordRef,
    confirmPasswordRef,
    branchRef,
  };
}
