export const hexaColor = (): string => {
  const str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return `#${color}`
}

export const getData = async <T extends {}>(url: string): Promise<T> => {
  const response = await fetch(url)
  const data: T = await response.json()
  if (response.status === 200)
    return data
  else
    return Promise.reject(data)
}
