import React from 'react'
import "./loginPage.css"
import { FormSignContainer } from '../../components/FormSignContainer/formSignContainer'
import { InputUser } from '../../components/InputUser/inputUser'
import { InputSubmit } from '../../components/InputSubmit/inputSubmit'
import { NavLink } from 'react-router-dom'
export const LoginPage = () => {
  return (
    <FormSignContainer title="Welcome To Mail Box">
      <form className='LogInPage'>
        <InputUser labelName="Email" name="email" onChange={(e)=>console.log("changed")}/>
        <InputUser labelName="password" name="password" type='password' />
        <InputSubmit value='Log In' />
      </form>
      <p className='pTag'> dont have an account? <NavLink to="/register">register Here</NavLink></p>

    </FormSignContainer>
  )
}
