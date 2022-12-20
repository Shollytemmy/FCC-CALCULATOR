import React from 'react'

export const Display = ({outPut, setOutPut}) => {
  return (
    <div className='display'>
        <p className='first output-text'>{outPut}</p>
        <p className='second output-text'>{outPut}</p>
    </div>
  )
}
