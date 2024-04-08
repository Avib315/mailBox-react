import React from 'react'
import "./emailTitle.css"
export const EmailTitle = ({title = "Meeting with new investors",dateInfo="Today, 28th March 2024, 09:25"}) => {
  return (
    <div className='EmailTitle'>
      <p>{dateInfo}</p>
      <h3>{title}</h3>
    </div>
  )
}
