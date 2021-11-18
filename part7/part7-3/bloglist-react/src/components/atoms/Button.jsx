import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  color: ${props => props.textColor};
  padding: 10px 25px;
  margin-top: 15px;
  text-transform: uppercase;
  border: 0px;
  background-color: ${props => props.color};
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
`

export const Button = ({ text, handler, backgroundColor = '#aed9e0', textColor = '#5e6472;' }) => {
  return <ButtonStyle backgroundColor={backgroundColor} textColor={textColor} onClick={handler}>{text}</ButtonStyle>
}
