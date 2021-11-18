import React from 'react'

// Styled
import styled, { keyframes } from 'styled-components'
// React Spring

const boxShadow = keyframes`
  100% {box-shadow: 0 4px #5e6472;}
`

const InputStyle = styled.input`
  color: #5e6472;
  font-weight: 400;
  padding: 10px 14px;
  margin-top: 15px;
  outline: none;
  border-radius: 0px;
  border: none;
  box-shadow: 0 1px #5e6472;
  &:focus {
    animation: ${boxShadow} .3s forwards; 
  }  
`

export const Input = ({ type, placeHolder }) => {
  // const props = useSpring()
  return <InputStyle type={type} placeholder={placeHolder} />
}
