import { useEffect, useState } from 'react'
import TestOne from './components/testOne'
import TestTwo from './components/testTwo'
import TestThree from './components/testThree'
import TestFour from './components/testFour'
import TestFive from './components/TestFive'
import type { TabItem } from './components/tab'
import Tab from './components/tab'
import './App.css'
import './style/index.less'
interface ResponseData<T> {
  code: number
  data: T
}
function App() {
  const data:TabItem[] = [
    {label:'day 1',value:1},
    {label:'day 2',value:2},
    {label:'day 3',value:3},
    {label:'day 4',value:4},
    {label:'day 5',value:5},
    {label:'day 6',value:6},
  ]
  const [tabList, setTabList] = useState<TabItem[]>(data)
  const skillList: string[] = ['HTML', 'CSS', 'JavaScript']
  function update({ id }: { id: number }): void {
    alert(id)
  }
  const [active, setActive] = useState<string | number>(1)
  const tabClick = (item: TabItem): void => {
    setActive(item.value)
  }
  function getDayComponent(value: string | number): JSX.Element {
    const componentsMap = new Map<(number | string), JSX.Element>()
    componentsMap.set(1, <TestOne name="qeqzsad" skills={skillList} onClick={() => update({ id: Math.floor(Math.random() * 100) })} />)
    componentsMap.set(2, <TestTwo num={32} />)
    componentsMap.set(3, <TestThree />)
    componentsMap.set(4, <TestFour />)
    componentsMap.set(5, <TestFive />)
    return componentsMap.get(value) ?? <h1>没有对应的组件</h1>
  }
  // const getData = async <T extends {}>(url: string): Promise<T> => {
  //   const response = await fetch(url)
  //   const data: T = await response.json()
  //   return data
  // }
  // useEffect(() => {
  //   (async function load() {
  //     const data = await getData<ResponseData<TabItem[]>>('http://mock.apifox.cn/m1/641537-0-default/test')
  //     setTabList(data.data)
  //   })()
  // }, [])
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
