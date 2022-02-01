import {useRef} from 'react'
import { useHistory } from 'react-router-dom'

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
     const submitHandler = async (event) => {
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
       const response = await fetch("http://localhost:9000/User/createUser", {
         method: "POST",
         body: JSON.stringify(user),
         headers: {
           "Content-Type": "application/json",
         },
       });
       if (response.ok) {
         const data = await response.json();
         if (data.status === "success") {
           alert(data.message);
           history.replace("/login");
         } else {
           alert(data.message + " Please enter a valid email");
         }
       }
     };
    return { nameRef, emailRef, passwordRef, dobRef, rollRef, genderRef, branchRef, confirmPassRef, collegeRef, submitHandler };
    
}

export default useRegister
