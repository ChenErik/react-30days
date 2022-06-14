// import type { FC } from 'react'
import { hexaColor } from '../utils'
function isPrinme(num: number) {
  if (num < 2)
    return false

  let i = 2
  for (i; i <= num - 1; i++) { // i=7  num=7
    if (num % i === 0)
      break
  }

  if (i > num - 1)
    return true

  else
    return false
}
function getColorByNum(num: number): string {
  if (isPrinme(num))
    return '#FF6A6A'
  else if (num % 2 === 0)
    return '#3CB371'
  else if (num % 2 !== 0)
    return '#FFD700'
  return '#FFD700'
}
// const Love = ({ text }: { text: string }) => {
//   return (
//     <div className="love">
//         <div className="love-left">
//         </div>
//         <div className="love-right">
//         </div>
//         <div className="love-bottom">
//             <div className="love-bottom-text">
//                 {text}
//             </div>
//         </div>
//     </div>
//   )
// }
const Testtwo = ({ num }: { num: number }) => {
  return (
    <div className="test-two">
        {/* {Love({ text: 'Love' })} */}
        <div className="test-two-colors">
            {
                Array.from({ length: num }).map((_el, index) => {
                  return <div className="test-two-colors-box" key={index} style={{ backgroundColor: getColorByNum(index) }}>{index}</div>
                })
            }
        </div>
        <div className="test-two-colors">
            {
                Array.from({ length: num }).map((_el, index) => {
                  return <div className="test-two-colors-box" key={index} style={{ backgroundColor: hexaColor() }}>{hexaColor()}</div>
                })
            }
        </div>
    </div>
  )
}
export default Testtwo
