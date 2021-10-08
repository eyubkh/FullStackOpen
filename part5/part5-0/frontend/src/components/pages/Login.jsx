import React from 'react'

import { Form } from '../organisms/Form'
import { userData, loginAuth } from '../../services/userService'

export const Login = ({ setUser }) => {

  const handlerLogin = async (event) => {
    console.log('dentro del login')
    event.preventDefault()
    const obj = {
      username: event.target[0].value,
      password: event.target[1].value
    }
    const resultAuth = await loginAuth(obj)
    if (!resultAuth.error) {
      const resultUser = await userData(resultAuth.username)
      window.localStorage.setItem('tokenBlogs', JSON.stringify(resultAuth))
      setUser(resultUser)
    } else {
      event.target[0].value = ''
      event.target[1].value = ''
    }
  }

  return (
    <>
      <Form handler={handlerLogin} />
    </>
  )
}
