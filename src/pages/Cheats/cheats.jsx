import React, { useContext } from 'react'
import "./cheats.scss"
import { LabelBadge } from '../../components/LabelBadge/labelBadge'
import { EmailTitle } from '../../components/EmailTitle/emailTitle';
import { CheatRow } from '../../components/CheatRow/cheatRow';
import { TextArea } from '../../components/TextArea/textArea';
import { FaStar } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { FiPrinter } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import { SendBtn } from '../../components/SendBtn/sendBtn';
import { useParams } from 'react-router-dom';
import { useAxiosReq } from '../../functions/webApi';
import { UserContexts } from '../../dataContext/UserContext';
export const Cheats = () => {
  const { emailId } = useParams()
  const { data, error, loading } = useAxiosReq({ deafultValue: {}, url: "userchats/getchatsbyid", body: { chatId: emailId }, dependency: [emailId] })
  const { userId } = useContext(UserContexts)
  return (
    <div className='Cheats'>
      <div className="headerContainer">
        <div className="lableContainer">
          <LabelBadge bgColor="#f2dea8" />
        </div>
        <div className="buttonsContainer">
          <button className="headersButtons"><FaStar /></button>
          <button className="headersButtons"><IoTrashBin /></button>
          <button className="headersButtons"><FiPrinter /></button>
          <button className="headersButtons"><HiDotsVertical /></button>
        </div>
      </div>
      <EmailTitle subject={data?.subject} dateInfo={data?.msg && data.msg[0].date} />
      <div className="cheatsAndTextAreaContnainer">
        <div className="cheatsRowContainer">
          {data?.msg?.map((msg, i) => <CheatRow key={"ceats" + i} isMe={userId == msg.from._id}{...msg} />)}
        </div>
        <div className="textAreaBtnContainer">
          <TextArea />
          <SendBtn />
        </div>
      </div>
    </div>
  )
}
