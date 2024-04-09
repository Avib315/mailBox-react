import React, { useEffect } from 'react'
import "./emailType.css"
import {  NavLink } from 'react-router-dom'
import playOnClickEffect from '../../functions/soundClickEffect'
export const EmailType = ({name ="draft" , IconType ,to=""}) => {

  return (
      <NavLink onClick={playOnClickEffect} className={({isActive})=> isActive ? "EmailType activeEmail" : "EmailType"} to={`${to}`}> 
      <span>
       <IconType/> {name}
      </span>
      </NavLink>
  )
}
