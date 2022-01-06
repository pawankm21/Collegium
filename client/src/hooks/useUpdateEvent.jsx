import React,{useState,useEffect} from 'react'

function useUpdateEvent() {
   const [name, setName] = useState(null);
   const [tillWhen, settillWhen] = useState(null);
   const [when, setWhen] = useState(null);
   const [message, setMessage] = useState(null);
   const [lastDate, setLastDate] = useState(null);
   const [tags, setTags] = useState([]);
    const [where, setWhere] = useState(null);
    const [coordinators, setCoordinators] = useState([]);
    const user = [
        {
            propName: 'name',
            value: name,
        },
        {

        }
    ]
}

export default useUpdateEvent