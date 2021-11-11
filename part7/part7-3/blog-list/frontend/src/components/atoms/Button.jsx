import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  color: whitesmoke;
  padding: 5px 15px;
  text-transform: uppercase;
  border: 0px;
  background-color: orangered;
  border-radius: 3px;
  cursor: pointer;
`

export const Button = ({ text }) => {
  return <ButtonStyle>{text}</ButtonStyle>
}
