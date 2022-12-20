import React from 'react'

export const Buttons = ({keys, handleClick}) => {
  return (
    <>
    {
        keys.map((key, idx) => <button key={idx} className={`btn__single btn-${idx}`} onClick={(e) => handleClick(e.target.name)} name={key}>{key}</button>)
    }
    </>
  )
}
