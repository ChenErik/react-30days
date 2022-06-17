import { useEffect, useState } from 'react'
import { hexaColor } from '../utils'

interface ColorItem {
  color: string
  copied: boolean
}
// 生成数据
const TestSeven = () => {
  const [colorList, setColorList] = useState<ColorItem[]>([])
  const generateData = () => {
    const colorList: ColorItem[] = []
    for (let i = 0; i < 27; i++) {
      colorList.push({
        color: hexaColor(),
        copied: false,
      })
    }
    setColorList(colorList)
  }
  function copyColor(color: string) {
    // eslint-disable-next-line no-alert
    alert(color)
  }
  useEffect(() => {
    generateData()
  }, [])
  return (
    <div className="test-seven">
      <div className="test-seven-top">
        <h1>TestSeven</h1>
        <div className="test-seven-top-button" onClick={generateData}>重新生成</div>
      </div>
      <div className="test-seven-colors">
        {
          colorList.map((item, index) => (
            <>
              <div key={index} className="test-seven-colors-item" onClick={() => copyColor(item.color)} style={{ backgroundColor: item.color }}>
                {item.color}
              </div>
            </>
          ))
        }
      </div>
    </div>
  )
}

export default TestSeven
