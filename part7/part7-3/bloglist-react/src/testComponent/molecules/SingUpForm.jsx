import React from 'react'

// Components
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { Title } from '../atoms/Title'
// import { Span } from '../atoms/Span'

export const SignUpForm = () => {
  return (
    <>
      <Title text='Sign Up' />
      <Input type='email' palceHolder='Email' />
      <Input type='text' palceHolder='User' />
      <Input type='password' palceHolder='Password' />
      <Button backgroundColor='#ffa69e' textColor='#fff' text='sign up' />
    </>
  )
}
