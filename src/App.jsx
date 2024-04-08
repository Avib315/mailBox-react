import { React } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout/mainLayout.jsx'
import { EmialLayout } from './layout/EmailLayout/emailLayout.jsx'
import { EmialListLayout } from './layout/EmailListLayout/emailListLayout.jsx'
import { CheatsLayout } from './layout/CheatsLayout/cheatsLayout.jsx'
import { LoginPage } from './pages/LoginPage/loginPage.jsx'
import { RegisterPage } from './pages/RegisterPage/registerPage.jsx'
import { NewMsgPage } from './pages/NewMsgPage/newMsgPage.jsx'


const App = () => {
 
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/' element={<MainLayout />}>
            <Route path='/emails' element={<EmialLayout />}>
              <Route path='new-message' element={<NewMsgPage />} >
              </Route>
              <Route path=':emailType' element={<EmialListLayout />} >

                <Route path=':userId' element={<CheatsLayout />} >
                </Route>
              </Route>
            </Route>
          <Route path='/compas' element={<>compas</>}></Route>
          <Route path='/view' element={<>view</>}></Route>
          <Route path='/checked' element={<>checked</>}></Route>
          <Route path='/stats' element={<>stats</>}></Route>
          <Route path='/video' element={<>video</>}></Route>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
