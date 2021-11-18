import React from 'react'
// React Redux
import { useDispatch } from 'react-redux'
import { setUserAction } from '../../redux/actions/userAction'
// Styled
import styled from 'styled-components'
// Components
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { Title } from '../atoms/Title'
import { Span } from '../atoms/Span'

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const SignInForm = () => {
  const dispatch = useDispatch()
  const handlerSignIn = (event) => {
    event.preventDefault()
    const object = {
      username: event.target[0].value,
      password: event.target[1].value
    }
    dispatch(setUserAction(object))
    event.target[0].value = ''
    event.target[1].value = ''
  }
  return (
    <Form onSubmit={handlerSignIn}>
      <Title text='Sign in' />
      <Input type='text' placeHolder='User' />
      <Input type='password' placeHolder='Password' />
      <Span text='Forgot your password?' margin={{ top: 0, bottom: 0 }} size={13}/>
      <Button backgroundColor='#ffa69e' textColor='#fff' text='sign in' />
    </Form>
  )
}
