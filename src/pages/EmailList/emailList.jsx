import React from 'react'
import "./emailList.css"
import { InputSearch } from '../../components/InputSearch/inputSearch'
import { EmailLi } from '../../components/EmailLi/emailLi'
import { arrUsers } from './fakeUsersarr';

export const EmailList = () => {
  return (
    <div className='EmailList'>
      <div className="container">

        <div className="inputSerachContainer">
          <InputSearch />
        </div>
        <div className="emailListContainer">
          {arrUsers.map((e,i) => <EmailLi key={"emailList-"+i}{...e} />)}
        </div>
      </div>
    </div>
  )
}
