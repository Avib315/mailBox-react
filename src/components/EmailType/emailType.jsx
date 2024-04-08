import React, { useEffect } from 'react'
import "./emailType.css"
import {  NavLink } from 'react-router-dom'
export const EmailType = ({name ="draft" , IconType ,to=""}) => {

  return (
      <NavLink className={({isActive})=> isActive ? "EmailType activeEmail" : "EmailType"} to={`${to}`}> 
      <span>
       <IconType/> {name}
      </span>
      </NavLink>
  )
}
