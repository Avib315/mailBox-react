import { React } from 'react'
import './App.css'
import { EmailLi } from './components/EmailLi/emailLi'
import { LabelBadge } from './components/LabelBadge/labelBadge'
import { InputSearch } from './components/InputSearch/inputSearch'
import { Badge } from './components/Badge/badge'
import { NewMsgBtn } from './components/NewMsgBtn/newMsgBtn'
import { EmailType } from './components/EmailType/emailType'
import { navArr } from './lib/iconsArr.js'
import { EmailTitle } from './components/EmailTitle/emailTitle.jsx'
import { SendBtn } from './components/SendBtn/sendBtn.jsx'


const App = () => {


  return (
    <>
      <div className="App">
        {/* <EmailLi /> */}
        {/* <InputSearch /> */}
        {/* <LabelBadge bgColor='#ffd700' />  */}
        {/* <Badge>2</Badge> */}
        {/* {navArr.map((nav => <EmailType name={nav.name} to={nav.to} IconType={nav.icon} />))} */}
        {/* <EmailTitle/> */}
        {/* <NewMsgBtn/> */}
        {/* <SendBtn/> */}

      </div>
    </>
  )
}

export default App
