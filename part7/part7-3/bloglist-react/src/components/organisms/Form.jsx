import React, { Fragment } from 'react'
// Redux
import { useDispatch } from 'react-redux'
import { setUserAction } from '../../redux/actions/userAction'
// Components
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { Title } from '../atoms/Title'
// Styled
import styled from 'styled-components'

const FormStyle = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;
`

export const Form = () => {
  const dispatch = useDispatch()
  const handlerLogin = async (event) => {
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
    <Fragment>
      <FormStyle onSubmit={handlerLogin}>
        <Title text='SignIn' />
        <Input type='text' holder='User' />
        <Input type='password' holder='Password' />
        <Button text='send' />
      </FormStyle>
    </Fragment>
  )
}
