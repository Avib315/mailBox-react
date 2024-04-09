import React, { useEffect, useRef } from 'react'
import "./emailList.css"
import { InputSearch } from '../../components/InputSearch/inputSearch'
import { EmailLi } from '../../components/EmailLi/emailLi'
import { Loading } from '../../components/Loading/loading';
import { useParams } from 'react-router-dom';
import { flags, useAxiosReq, axiosReq } from '../../functions/webApi';
import { formatTime } from "../../functions/timeFormat"
export const EmailList = () => {
  const { emailType } = useParams()
  const axiosPostQuery = { method: "POST", deafultValue: {}, url: "userchats/getchats", body: { flags: [flags[emailType]] }, dependency: [emailType] }
  const { loading, data, setData } = useAxiosReq(axiosPostQuery)
  const searchByInput = (e) => {
    setTimeout(async () => {
      try {
        const filterData = await axiosReq({ ...axiosPostQuery, body: { flags: [flags[emailType]], input: e.target.value } })
        setData(filterData);
      } catch (error) {
        console.error(error)
      }

    }, 1000)
  }
  console.log(data);
  return (
    <div className='EmailList'>
      <div className="container">

        <div className="inputSerachContainer">
          <InputSearch onChange={searchByInput} />
        </div>
        <div className="emailListContainer">
          {(!loading && data?.length == 0) && < h2 > No Chats , You Lonely Fuck</h2>}
          {data&&Array.isArray(data)&&data.map((e, i) => {
            const lastmsg = e.chat.msg.find(msg => msg.date === e.chat.lastDate)
            return <EmailLi
              to={e._id}
              key={"emailList-" + i}
              userName={e.chat.members[e.chat.members.length - 1].fullName}
              userMsg={lastmsg.content}
              timeMsg={formatTime(lastmsg.date)}
              userImage={e.chat.members[e.chat.members.length - 1].avatar} />
          })}
          {loading && <Loading />}
        </div>
      </div>
    </div >
  )
}
