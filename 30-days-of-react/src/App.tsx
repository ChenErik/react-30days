import TestOne from './components/testOne'
import TestTwo from './components/testTwo'
import './App.css'
import './style/index.less'
function App() {
  const skillList: string[] = ['HTML', 'CSS', 'JavaScript']
  function update({ id }: { id: number }): void {
    alert(id)
  }
  return (
    <div className="App">
      <TestOne name="qeqzsad" skills={skillList} onClick={() => update({ id: 123 })}></TestOne>
      <TestTwo num={32}></TestTwo>
    </div>
  )
}
export default App
