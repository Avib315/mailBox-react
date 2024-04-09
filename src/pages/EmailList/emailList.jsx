import React, { useEffect, useState } from 'react'
import "./emailList.css"
import { InputSearch } from '../../components/InputSearch/inputSearch'
import { EmailLi } from '../../components/EmailLi/emailLi'
import { Loading } from '../../components/Loading/loading';
import { useParams } from 'react-router-dom';
import { getEmails } from '../../functions/webApi';
import { formatTime } from "../../functions/timeFormat"
export const EmailList = () => {
  const { emailType } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [arrChatUser, setArrChatUser] = useState(null)
  useEffect(() => {
    setIsLoading(true);
    setArrChatUser(null)

    getEmails(emailType).then(data => { setArrChatUser(data); setIsLoading(false) })
  }, [emailType])
  return (
    <div className='EmailList'>
      <div className="container">

        <div className="inputSerachContainer">
          <InputSearch />
        </div>
        <div className="emailListContainer">
          {!isLoading && arrChatUser?.chats?.length == 0 && < h2 > No Chats , You Lonely Fuck</h2>}
          {arrChatUser ? arrChatUser.chats.map((e, i) => {
            const lastmsg = e.chat.msg.find(msg => msg.date === e.chat.lastDate)
            return <EmailLi
              to={"dadasd" + i}
              key={"emailList-" + i}
              userName={e.chat.members[e.chat.members.length - 1].fullName}
              userMsg={lastmsg.content}
              timeMsg={formatTime(lastmsg.date)}
              userImage={e.chat.members[e.chat.members.length - 1].avatar} />
          }) : <Loading />}
        </div>
      </div>
    </div >
  )
}
