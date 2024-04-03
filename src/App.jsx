import { React } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout/mainLayout.jsx'
import { EmialLayout } from './layout/EmailLayout/emailLayout.jsx'
import { EmialListLayout } from './layout/EmailListLayout/emailListLayout.jsx'
import { CheatsLayout } from './layout/CheatsLayout/cheatsLayout.jsx'


const App = () => {


  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/emails' element={<EmialLayout/>}> 
            <Route path=':emailType' element={<EmialListLayout/>} >
            <Route path=':userId' element={<CheatsLayout/>} >
            </Route>
            </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
