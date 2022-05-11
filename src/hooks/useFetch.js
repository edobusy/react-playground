import { useState, useEffect } from 'react'

const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, options)
      const data = await response.json()

      setData(data)
      setLoading(false)
    }

    fetchData().catch((e) => {
      setError(e)
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, loading, error }
}

export default useFetch
