import React from 'react'
import "./inputSubmit.css"
export const InputSubmit = ({value = "in"}) => {
  return (
    <input type='submit' value={value} className='InputSubmit'/>
  )
}
  