import React from 'react'
import "./cheatRow.css"
import { TiArrowBack } from "react-icons/ti";
import { useState } from 'react';
export const CheatRow = ({ isMe, senderName, img, date, msg, msgId }) => {
  const [msgIdSelected, setIdMsgSelected] = useState(false)
  return (
    <div className={`CheatRow ${msgIdSelected ? "selectedMsg" : "noneSelected"}`} onClick={() => setIdMsgSelected(!msgIdSelected)}>
      <div className='rowContainer'>
        <div className="imgAndNameContainer">
        {isMe ? <TiArrowBack className='iconYou' /> : <img src={img} className='userImg' />}
        <span className='senderName'>{senderName}</span>
        </div>
        {!msgIdSelected && <p className='msg'>{msg}</p>}
        <span className='date'>{date}</span>
      </div>
        {msgIdSelected && <p className='bodyMsg'>{msg}</p>}
    </div>
  )
}
