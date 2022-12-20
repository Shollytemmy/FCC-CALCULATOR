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
  const [outPut, setOutPut] = useState("0")

  const handleClick = (key) => {

    if(key === "="){
     return  calculate()
    } else if(key === "AC"){
     return setToZero()
    } else{
     return setOutPut(outPut + key)
    }
  };


  const calculate = () => {
    let initialOutPut = ''

    if(outPut.includes("--")){
     initialOutPut = outPut.replace("--", "+")

     return initialOutPut

    } else{
      initialOutPut = outPut
    }

    try {
      setOutPut(eval(initialOutPut))
      
    } catch (error) {
      setOutPut("0")
      
    }
  }
  const setToZero = () => {
    setOutPut(0)
  }

  return (
    <div className="App">
      <Display outPut={outPut} setOutPut={setOutPut} />
      <Calculator keys={keys} handleClick={handleClick} />
      
    </div>
  )
}

export default App
