import React from 'react'
import "./cheats.css"
import { LabelBadge } from '../../components/LabelBadge/labelBadge'
import { EmailTitle } from '../../components/EmailTitle/emailTitle';
import { arrCheats } from './fakeChatsArr';
import { CheatRow } from '../../components/CheatRow/cheatRow';
import { TextArea } from '../../components/TextArea/textArea';
import { FaStar } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { FiPrinter } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import { SendBtn } from '../../components/SendBtn/sendBtn';
export const Cheats = () => {
  return (
    <div className='Cheats'>
      <div className="headerContainer">
        <LabelBadge bgColor="#f2dea8" />
        <div className="buttonsContainer">
          <button className="headersButtons"><FaStar /></button>
          <button className="headersButtons"><IoTrashBin /></button>
          <button className="headersButtons"><FiPrinter /></button>
          <button className="headersButtons"><HiDotsVertical /></button>
        </div>
      </div>
      <EmailTitle />
      <div className="cheatsAndTextAreaContnainer">
        <div className="cheatsRowContainer">
          {arrCheats.map((cheat, i) =><CheatRow key={"ceats" + i} {...cheat} />)}
        </div>
        <div className="textAreaBtnContainer">
        <TextArea/>
        <SendBtn/>
        </div>
      </div>
    </div>
  )
}
