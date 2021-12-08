import React,{useState,useEffect} from 'react'

function useFetchUser() {
      const [username, setUsername] = useState("John Doe");
      const id = localStorage.getItem("id");
      const fetchUser = async () => {
        if (localStorage.getItem("id") === null) return;
        const response = await fetch(
          `http://localhost:9000/User/getUser/${localStorage.getItem("id")}`
        );
        if (response.ok) {
          const data = await response.json();
          setUsername(data.name);
        }
    };
    useEffect(() => {
        fetchUser();
    }, [])
    return  username ;
}

export default useFetchUser
