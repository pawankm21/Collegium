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
    { propsName: "name", value: nameRef },
    { propsName: "email", value: emailRef },
    { propsName: "roll", value: rollRef },
    { propsName: "college", value: collegeRef },
    { propsName: "password", value: passwordRef },
    { propsName: "branch", value: branchRef },
  ];

  async function formSubmitHandler(event) {
    event.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      window.AbortSignalalert("Passwords do not match");
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
