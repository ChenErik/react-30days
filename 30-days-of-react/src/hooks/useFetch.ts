import { useEffect, useState } from 'react'
// import { getData } from '../utils'

export const useFetch = <T>(url: string, defaultValue?: T): T => {
  const [data, setData] = useState<T>(defaultValue ?? [] as any)
  useEffect(() => {
    (async function load() {
      const response = await fetch(url)
      const data: T = await response.json()
      if (response.status === 200)
        setData(data)
      else
        setData(defaultValue ?? [] as any)
    })()
  }, [url])
  return data
}
