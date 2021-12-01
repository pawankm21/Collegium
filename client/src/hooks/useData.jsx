import React from 'react'

function useData({url}) {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    
    React.useEffect(() => {
        async function fetchData() {
        setLoading(true)
        try {
            const response = await fetch(url)
            const json = await response.json()
            setData(json)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
        }
        fetchData()
    }, [url])
    
    return {data, error, loading}
}
export default useData
