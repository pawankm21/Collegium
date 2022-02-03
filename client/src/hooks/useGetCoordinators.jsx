import { useEffect, useState } from "react";


function useGetCoordinators(coordinators) {
    const [data, setData] = useState([]);
    function getCoordinators()
    {
         for(const coordinator of coordinators) {
        fetch(`http://localhost:9000/User/getUser/${coordinator}`)
        .then((res) => res.json())
        .then((json) => {
            setData((data) => [...data, json]);
        });
    }
    }
    function findCoordinators(coordinators)
    {
        coordinators = coordinators.split(",");
        
    }
   
  return { data };
}

export default useGetCoordinators;
