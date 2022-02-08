import React,{useState,useEffect} from 'react'

function useCountEvents() {
  const [loading,setLoading]=useState(false)
    const [upcoming, setUpcoming] = useState(0)
    const [past, setPast] = useState(0)
    const [conducted, setConducted] = useState(0)
  async function getCounts() {
    setLoading(true)
        const response = await fetch(
          `${
            process.env.REACT_APP_SERVER_URL
          }/Event/countEvent/${sessionStorage.getItem("id")}`
        );
        const data = await response.json()
        setUpcoming(data.upcoming)
        setPast(data.past)
    setConducted(data.conducted)
    setLoading(false);
    }
    useEffect(() => {
        getCounts()
    }, [])
    return {upcoming, past, conducted,loading}
}

export default useCountEvents
