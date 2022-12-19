import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Calculator from './Components/Calculator'



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
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Calculator keys={keys} />
      
    </div>
  )
}

export default App
