import React, { useEffect } from 'react'
import "./emailType.css"
import {  NavLink } from 'react-router-dom'
import { testConnection } from '../../functions/webApi'
export const EmailType = ({name ="draft" , IconType ,to=""}) => {
  useEffect(()=>{return testConnection()}, [])

  return (
      <NavLink className={({isActive})=> isActive ? "EmailType activeEmail" : "EmailType"} to={`${to}`}> 
      <span>
       <IconType/> {name}
      </span>
      </NavLink>
  )
}
