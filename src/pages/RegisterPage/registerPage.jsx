import React from 'react'
import "./registerPage.css"
import { FormSignContainer } from '../../components/FormSignContainer/formSignContainer'
import { InputUser } from '../../components/InputUser/inputUser'
import { InputSubmit } from '../../components/InputSubmit/inputSubmit'
import { NavLink } from 'react-router-dom'
export const RegisterPage = () => {
  return (
    <FormSignContainer title="Your First Mail Box Is Here">
    <form className='RegisterPage'>
    <InputUser labelName="first name" />
    <InputUser labelName="last name" />
    <InputUser labelName="Email" type='email' />
    <InputUser labelName="password" type='password' />
    <InputUser labelName="confirm password" type='password' />
    <InputSubmit value='Register'/>
    <p className='pTag'>already have an account? <NavLink to="/login">Log in Here</NavLink></p>
    </form>
  </FormSignContainer>
  )
}
  