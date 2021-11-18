import React from 'react'

// Styled
import styled from 'styled-components'

const SpanStyle = styled.span`
  font-size: ${props => props.fontSize}px;
  width: 350px;
  text-align: center;
  margin: ${props => props.margin.top}px ${props => props.margin.bottom}px  ;
`
export const Span = ({ text, size, margin = { top: 15, bottom: 15 } }) => {
  return <SpanStyle margin={margin} fontSize={size} >{text}</SpanStyle>
}
