import React, { useState } from 'react'
import "./loginPage.css"
import { FormSignContainer } from '../../components/FormSignContainer/formSignContainer'
import { InputUser } from '../../components/InputUser/inputUser'
import { InputSubmit } from '../../components/InputSubmit/inputSubmit'
import { NavLink } from 'react-router-dom'
export const LoginPage = () => {
  const [userInput, setUserInput] = useState({ email: "", password: "" })
  const setPasswordHendler = (e) => {
    setUserInput({ ...userInput, password: e.target.value })
  }
  const setEmaildHendler = (e) => {
    setUserInput({ ...userInput, email: e.target.value })
  }
  const onSubmitHendler = (e) => {
    e.preventDefault()
  }
  return (
    <FormSignContainer title="Welcome To Mail Box">
      <form className='LogInPage' onSubmit={onSubmitHendler}>
        <InputUser labelName="Email" name="email" onChange={setEmaildHendler} />
        <InputUser labelName="password" name="password" type='password' onChange={setPasswordHendler} />
        <InputSubmit value='Log In' />
      </form>
      <p className='pTag'> dont have an account? <NavLink to="/register">register Here</NavLink></p>

    </FormSignContainer>
  )
}
