import React from 'react'
import "./emailLi.css"
import { Badge } from '../Badge/badge'
export const EmailLi = ({}) => {
  return (
    <div className='EmailLi'>
        <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
        <div className="info">
        <h4>Jessica Koel</h4>
        <p className='textMessageInfo'>
          Hello How Are U?  dont Forget to Fuck off
        </p>
        </div>
   
        <div className="timeAndBadeg">
          <p className='time'>12:43</p>
          <Badge>2</Badge>
        </div>
        </div>
  )
}
