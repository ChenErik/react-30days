import { useEffect, useState } from 'react'
import TestOne from './components/testOne'
import TestTwo from './components/testTwo'
import TestThree from './components/testThree'
import TestFour from './components/testFour'
import type { TabItem } from './components/tab'
import Tab from './components/tab'
import './App.css'
import './style/index.less'
interface ResponseData<T> {
  code: number
  data: T
}
function App() {
  const [tabList, setTabList] = useState<TabItem[]>([])
  const skillList: string[] = ['HTML', 'CSS', 'JavaScript']
  function update({ id }: { id: number }): void {
    alert(id)
  }
  const [active, setActive] = useState<string | number>(1)
  const tabClick = (item: TabItem): void => {
    setActive(item.value)
  }
  function getDayComponent(value: string | number): JSX.Element {
    switch (value) {
      case 1:
        return <TestOne name="qeqzsad" skills={skillList} onClick={() => update({ id: 123 })}></TestOne>
      case 2:
        return <TestTwo num={32}></TestTwo>
      case 3:
        return <TestThree></TestThree>
      case 4:
        return <TestFour></TestFour>
      default:
        return <h1>没有对应的组件</h1>
    }
  }
  const getData = async <T extends {}>(url: string): Promise<T> => {
    const response = await fetch(url)
    const data: T = await response.json()
    return data
  }
  useEffect(() => {
    (async function load() {
      const data = await getData<ResponseData<TabItem[]>>('http://mock.apifox.cn/m1/641537-0-default/test')
      setTabList(data.data)
    })()
  }, [])
  return (
    <div className="App">
      <Tab tabList={tabList} onClick={tabClick} active={active}></Tab>
      <div className="app-content">
        {getDayComponent(active)}
      </div>
    </div>
  )
}
export default App
