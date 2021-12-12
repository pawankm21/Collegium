import React,{useState,useEffect} from 'react'

function useCountEvents() {
    const [upcoming, setUpcoming] = useState(0)
    const [past, setPast] = useState(0)
    const [conducted, setConducted] = useState(0)
    async function getCounts() {
        const response = await fetch(`http://localhost:9000/Event/countEvent/${localStorage.getItem('id')}`)
        const data = await response.json()
        setUpcoming(data.upcoming)
        setPast(data.past)
        setConducted(data.conducted)
    }
    useEffect(() => {
        getCounts()
    }, [])
    return {upcoming, past, conducted}
}

export default useCountEvents
