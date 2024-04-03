import React from 'react'
import "./emailList.css"
import { InputSearch } from '../InputSearch/inputSearch'
import { EmailLi } from '../EmailLi/emailLi'
import { arrUsers } from './fakeUsersarr';

export const EmailList = () => {
  return (
    <div className='EmailList'>
      <div className="container">

      <div className="inputSerachContainer">
      <InputSearch />
      </div>
      <div className="emailListContainer">
      {arrUsers.map(e=><EmailLi {...e} />)}

      </div>

    </div>
      </div>
  )
}
