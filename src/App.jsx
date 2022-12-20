import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Calculator from './Components/Calculator'
import { Display } from './Components/Display'



const keys = [

  "AC",
  "/",
  "*",
  7,
  8,
  9,
  "-",
  4,
  5,
  6,
  "+",
  1,
  2,
  3,
  "=",
  0,
  "."
]

function App() {
  const [outPut, setOutPut] = useState(0)

  return (
    <div className="App">
      <Display outPut={outPut} setOutPut={setOutPut} />
      <Calculator keys={keys} />
      
    </div>
  )
}

export default App
