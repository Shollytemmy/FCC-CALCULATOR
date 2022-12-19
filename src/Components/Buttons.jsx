import React from 'react'

export const Buttons = ({keys}) => {
  return (
    <>
    {
        keys.map((key, idx) => <button key={idx} className="btn__single">{key}</button>)
    }
    </>
  )
}
