import { useRef } from "react";
export default function useUpdateUser()
{
      const nameRef = useRef();
      const emailRef = useRef();
      const genderRef = useRef();
      const idRef = useRef();
      const collegeRef = useRef();
      const passwordRef = useRef();

      const user = {
        name: "",
        email: "",
        gender: "",
        password: "",
        id: "",
        colllege: "",
      };

      const formSubmitHandler = (event) => {
        event.preventDefault();
        user.name = nameRef.current.value;
        user.email = emailRef.current.value;
        user.gender = genderRef.current.value;
        user.password = passwordRef.current.value;
        user.id = idRef.current.value;
        user.colllege = collegeRef.current.value;
        console.log(user);
    };
    return {
        user,
        formSubmitHandler,
        nameRef,
        emailRef,
        genderRef,
        idRef,
        collegeRef,
        passwordRef,
    };
}
