import React from 'react'
import "./emailLi.css"
import { Badge } from '../Badge/badge'
import { FaStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
export const EmailLi = ({userName = "" , to="" ,userImage = "" , timeMsg = "", userMsg = ""}  ) => {
  return (
    // <div className='EmailLi'>
      <NavLink to={to} className={({isActive})=>isActive ? "EmailLi activeLink":"EmailLi"}>

        <img src={userImage} alt="" />
        <div className="info">
        <h4>{userName}</h4>
        <p className='textMessageInfo'>
          {userMsg}
        </p>
        </div>
   
        <div className="timeAndBadeg">
          <p className='time'>{timeMsg}</p>
         <button className='star'><FaStar/></button>
        </div>
      </NavLink>
        // </div>
  )
}
