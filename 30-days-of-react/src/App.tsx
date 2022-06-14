import { useState } from 'react'
import TestOne from './components/testOne'
import TestTwo from './components/testTwo'
import TestThree from './components/testThree'
import TestFour from './components/testFour'
import type { TabItem } from './components/tab'
import Tab from './components/tab'
import './App.css'
import './style/index.less'
function App() {
  const tabList = [{
    label: 'day 1',
    value: 1,
  }, {
    label: 'day 2',
    value: 2,
  }, {
    label: 'day 3',
    value: 3,
  }, {
    label: 'day 4',
    value: 4,
  }, {
    label: 'day 5',
    value: 5,
  }]
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
