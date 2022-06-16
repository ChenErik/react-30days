import { useEffect, useState } from 'react'
import { getData } from '../utils'

export const useFetch = <T>(url: string, defaultValue?: T): T => {
  const [data, setData] = useState<T>(defaultValue ?? [] as any)
  useEffect(() => {
    (async function load() {
      try {
        const data = await getData<T>(url)
        setData(data)
      }
      catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
        setData(defaultValue ?? [] as any)
      }
    })()
  }, [])
  return data
}

