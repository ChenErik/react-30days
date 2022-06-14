import { useEffect, useRef, useState } from 'react'

export default function TestThree() {
  const [count, setCount] = useState(66)
  const [countO, setCountO] = useState(0)
  const [image, setImage] = useState('https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg')
  const dog = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
  const cat = 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
  const inputRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [inputRef])
  return (
    <div className="test-three">
      <input ref={inputRef} type="text" placeholder="这个输入框自动focus了" />
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setCountO(countO - 1)}>{countO}</button>
      {
          count % 2 === 0 ? <h3>Welcome to 30 Days Of React</h3> : <h3>Please Login</h3>
      }
      <button onClick={() => {
        const url = image === dog ? cat : dog
        setImage(url)
      }}>Change image</button>
      <img src={image} alt="animal" />
    </div>
  )
}
