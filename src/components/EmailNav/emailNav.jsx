import React from 'react'
import "./emailNav.css"
import { navArr } from '../../dataContext/chatsNav'
import { EmailType } from '../EmailType/emailType'
import { NavLink } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { NewMsgBtn } from '../NewMsgBtn/newMsgBtn'
export const EmailNav = () => {
  return (
    <div className='EmailNav'>
      <div className='titleAndBackBtn'>
      <NavLink to="/">
      <IoIosArrowBack/>
      </NavLink>
        <h2>Mail Box</h2>
      </div>
        <div className='navEamilTypeAndAddMsgBtn'> 
        <NewMsgBtn/>
        <div className='navEmaileType'> 
          {navArr.map(e => <EmailType IconType={e.icon} name={e.name} to={e.to} />)}
        </div>
        </div>
    </div>
  )
}
