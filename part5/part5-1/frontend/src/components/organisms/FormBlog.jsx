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
  margin: 20px 0;
  padding: 0;
`

export const FormBlog = ({ handler }) => {
  return (
    <>
      <FormStyle onSubmit={handler}>
        <Title text='Create Blog' />
        <Input type='text' holder='Title' />
        <Input type='text' holder='Url' />
        <Button text='create' />
      </FormStyle>
    </>
  )
}
