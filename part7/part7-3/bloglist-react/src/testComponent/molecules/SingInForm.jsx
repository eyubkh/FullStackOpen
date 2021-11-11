import React from 'react'

// Components
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { Title } from '../atoms/Title'
import { Span } from '../atoms/Span'

export const SignInForm = () => {
  return (
    <>
      <Title text='Sign in' />
      <Input type='text' palceHolder='User' />
      <Input type='password' palceHolder='Password' />
      <Span text='Forgot your password?' margin={{ top: 0, bottom: 0 }} size={13}/>
      <Button backgroundColor='#ffa69e' textColor='#fff' text='sign in' />
    </>
  )
}
