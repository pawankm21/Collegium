import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

function useShowEvent() {
    const { id } = useParams();
    const [data, setData] = useState({
      name: String,
      message: String,
      coordinators: [],
      when: Date,
      lastDate: Date,
      where: String,
      attendees: [],
      tags: [],
      imageurl: String,
      type: String,
    });
    async function getData() {
      const response = await fetch(
        `http://localhost:9000/Event/getEvent/${id}`
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    }
    useEffect(() => {
      getData();
    }, [id]);

    return data;
    

}

export default useShowEvent
