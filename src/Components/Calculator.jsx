import React from 'react'
import { Buttons } from './Buttons'
import { Display } from './Display'

const Calculator = ({keys}) => {
  return (
    <div className='calculator'>
       
        <Buttons keys ={keys} />
    </div>
  )
}

export default Calculator