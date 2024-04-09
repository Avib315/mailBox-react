import React, { useState } from 'react'
import "./registerPage.css"
import { FormSignContainer } from '../../components/FormSignContainer/formSignContainer'
import { InputUser } from '../../components/InputUser/inputUser'
import { InputSubmit } from '../../components/InputSubmit/inputSubmit'
import { NavLink } from 'react-router-dom'
export const RegisterPage = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    lastName: "",
    password: "",
    email: "",
    avatar: ""
  })
  const onChangHendler = (e) => {
    setUserInput((perv) => {
      return { ...perv, [e.target.name]: e.target.value }
    })
  }
  const onSubmitHendler = (e) => {
    e.preventDefault()
    const userObj = {
      fullName: userInput.firstName.trim() + " " + userInput.lastName.trim(),
      email: userInput.email.trim(),
      password: userInput.password,
    }
  }
  return (
    <FormSignContainer title="Your First Mail Box Is Here">
      <form className='RegisterPage' onSubmit={onSubmitHendler}>
        <InputUser name="firstName" labelName="first name" onChange={onChangHendler} />
        <InputUser name="lastName" labelName="last name" onChange={onChangHendler} />
        <InputUser name="email" labelName="Email" type='email' onChange={onChangHendler} />
        <InputUser name="password" labelName="password" type='password' onChange={onChangHendler} />
        <InputUser name="passwordConfirm" labelName="confirm password" type='password' onChange={onChangHendler} />
        <InputSubmit value='Register' />
        <p className='pTag'>already have an account? <NavLink to="/login">Log in Here</NavLink></p>
      </form>
    </FormSignContainer>
  )
}
