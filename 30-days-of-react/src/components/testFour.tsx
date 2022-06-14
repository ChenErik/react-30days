import type { MouseEvent } from 'react'
import { useState } from 'react'
function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min
}
const TestFour = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const fourMouseEnter = (_e: MouseEvent<HTMLElement>) => {
    const maxX = document.body.clientWidth - 10 - 200 // padding + selfWidth
    const maxY = document.body.clientHeight - 51 - 60 // padding + tabHeight + selfHeight
    setX(getRandomNumber(0, maxX))
    setY(getRandomNumber(0, maxY))
  }
  return (
    <div className="test-four" onMouseEnter={fourMouseEnter} style={{ left: `${x}px`, top: `${y}px` }} >
        30 Days Of React
    </div>
  )
}
export default TestFour
