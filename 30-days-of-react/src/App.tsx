import { useState } from 'react'
import TestOne from './components/testOne'
import TestTwo from './components/testTwo'
import TestThree from './components/testThree'
import TestFour from './components/testFour'
import TestFive from './components/TestFive'
import TestSix from './components/TestSix'
import TestSeven from './components/TestSeven'
import type { TabItem } from './components/tab'
import Tab from './components/tab'
import './App.css'
import './style/index.less'
import type { ResponseData } from './types'
import { useFetch } from './hooks/useFetch'
function App() {
  const data: TabItem[] = [
    { label: 'day 1', value: 1 },
    { label: 'day 2', value: 2 },
    { label: 'day 3', value: 3 },
    { label: 'day 4', value: 4 },
    { label: 'day 5', value: 5 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
    { label: 'day 6', value: 6 },
  ]
  const skillList: string[] = ['HTML', 'CSS', 'JavaScript']
  function update({ id }: { id: number }): void {
    // eslint-disable-next-line no-alert
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
    componentsMap.set(6, <TestSix />)
    componentsMap.set(7, <TestSeven />)
    return componentsMap.get(value) ?? <h1>没有对应的组件</h1>
  }
  const { data: tabList } = useFetch<ResponseData<TabItem[]>>('http://mock.apifox.cn/m1/641537-0-default/test', { code: 200, data })
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
