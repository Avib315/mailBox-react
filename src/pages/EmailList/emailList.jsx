import React, { useEffect, useState } from 'react'
import "./emailList.css"
import { InputSearch } from '../../components/InputSearch/inputSearch'
import { EmailLi } from '../../components/EmailLi/emailLi'
import { arrUsers } from './fakeUsersarr';
import { useParams } from 'react-router-dom';
import { getEmails } from '../../functions/webApi';
import { formatTime } from "../../functions/timeFormat"
export const EmailList = () => {
  const { emailType } = useParams()
  const [arrChatUser, setArrChatUser] = useState(null)
  useEffect(() => {
    console.log(emailType);
    getEmails(emailType).then(data => { setArrChatUser(data) })
    getEmails(emailType).then(data => { console.log(data.chats) })
  }, [emailType])
  return (
    <div className='EmailList'>
      <div className="container">

        <div className="inputSerachContainer">
          <InputSearch />
        </div>
        <div className="emailListContainer">
          {arrChatUser ? arrChatUser.chats.map((e, i) => {
            const lastmsg = e.chat.msg.find(msg => msg.date === e.chat.lastDate)
            return <EmailLi
              to={"dadasd" + i}
              key={"emailList-" + i}
              // {...e}
              userName={e.chat.members[e.chat.members.length - 1].fullName}
              userMsg={lastmsg.content}
              timeMsg={formatTime(lastmsg.date)}
              userImage={e.chat.members[e.chat.members.length - 1].avatar} />


          }) : null}
        </div>
      </div>
    </div>
  )
}
