import React from 'react'
import "./newMsgBtn.css"
import { IoMdMail } from "react-icons/io";
import { NavLink } from 'react-router-dom';
export const NewMsgBtn = () => {
  return (
    <NavLink to={"new-message"} className='NewMsgBtn'>
      <IoMdMail className='mailIcon' />
      <span> New Message</span> 
    </NavLink>
  )
}

