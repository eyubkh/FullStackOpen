import React from 'react'
// Styled
import styled from 'styled-components'
// Components
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { Title } from '../atoms/Title'
// import { Span } from '../atoms/Span'

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const SignUpForm = () => {
  return (
    <Form onSubmit={() => {}}>
      <Title text='Sign Up' />
      <Input type='email' placeHolder='Email' />
      <Input type='text' placeHolder='User' />
      <Input type='password' placeHolder='Password' />
      <Button backgroundColor='#ffa69e' textColor='#fff' text='sign up' />
    </Form>
  )
}
