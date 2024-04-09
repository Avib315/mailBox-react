import React from 'react'
import "./emailLi.css"
import { Badge } from '../Badge/badge'
import { FaStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import playOnClickEffect from '../../functions/soundClickEffect';
export const EmailLi = ({ userName = "", to = "", timeMsg = "", userMsg = "", members = [] }) => {
  return (
    <NavLink onClick={() => playOnClickEffect()} to={to} className={({ isActive }) => isActive ? "EmailLi activeLink" : "EmailLi"}>

      <div className="usersImageContainer">
        {members.slice(0, 3).map((mem) => <img src={mem.avatar} alt="userMember" />)}
      </div>
      <div className="info">
        <h4>{members[0].fullName} {members.length > 1 && ", +" + (members.length - 1)}</h4>
        <p className='textMessageInfo'>
          {userMsg}
        </p>
      </div>

      <div className="timeAndBadeg">
        <p className='time'>{timeMsg}</p>
        <button className='star'><FaStar /></button>
      </div>
    </NavLink>
  )
}
