import { useEffect, useState } from "react";


function useGetCoordinators(coordinators) {
    const [data, setData] = useState([]);
    for(const coordinator of coordinators) {
        fetch(`http://localhost:9000/User/getUser/${coordinator}`)
        .then((res) => res.json())
        .then((json) => {
            setData((data) => [...data, json]);
        });
    }
  return 
}

export default useGetCoordinators;
