import { useState } from 'react'

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
  const [outPut, setOutPut] = useState("0")

  const handleClick = (key) => {

    if(key === "="){
      calculate()
     
       

    } else if(key === "AC"){
      setToZero()
    

    } else if(outPut === "0"){
      setOutPut(key)
      
    }
    else{
      setOutPut(outPut  + key)
     
    }
  };


  const calculate = () => {
    setOutPut(eval(outPut))
    
  }
  const setToZero = () => {
    setOutPut("0")
  }

  return (
    <div className="App">
      <Display outPut={outPut} setOutPut={setOutPut} />
      <Calculator keys={keys} handleClick={handleClick} />
      
    </div>
  )
}

export default App
