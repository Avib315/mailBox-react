import React from 'react'
import "./newMsgBtn.css"
import { IoMdMail } from "react-icons/io";
export const NewMsgBtn = () => {
  return (
    <button className='NewMsgBtn'>
      <IoMdMail className='mailIcon' />
      <span> New Message</span> 
    </button>
  )
}

