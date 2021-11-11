import React from 'react'
import styled from 'styled-components'

const InputStyle = styled.input`
  padding: 7px 0px;
  padding-left: 10px;
  margin: 10px 0px;
  outline: none;
  border-radius: 3px;
  border: 2px solid orangered;
`

export const Input = ({ type, holder }) => {
  return <InputStyle type={type} placeholder={holder} />
}
