import React from 'react'
import styled from 'styled-components'

import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { Title } from '../atoms/Title'

const FormStyle = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;
`

export const Form = ({ handler }) => {
  return (
    <>
      <FormStyle onSubmit={handler}>
        <Title text='SignIn' />
        <Input type='text' holder='User' />
        <Input type='password' holder='Password' />
        <Button text='send' />
      </FormStyle>
    </>
  )
}
