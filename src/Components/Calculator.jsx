import React from 'react'
import { Buttons } from './Buttons'
import { Display } from './Display'

const Calculator = ({keys, handleClick}) => {
  return (
    <div className='calculator'>
       
        <Buttons keys ={keys} handleClick={handleClick} />
    </div>
  )
}

export default Calculator