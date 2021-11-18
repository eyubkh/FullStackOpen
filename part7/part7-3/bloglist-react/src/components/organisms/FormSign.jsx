import React from 'react'

// Styled
import styled from 'styled-components'
// Animated
import { useSpring, animated } from 'react-spring'
// Components
import { SignInForm } from '../molecules/SingInForm'
import { SignUpForm } from '../molecules/SingUpForm'

const FormSignStyle = styled(animated.div)`
  position: absolute;
  left: 0; 
  color: #5e6472;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  height: 100vh;
  background-color: #fff;
  
  input:nth-of-type(1) {
    margin: 15px 15px;
  }
  input:nth-of-type(2) {
    margin: 15px 15px;
  }
`

export const FormSign = ({ animation: isAnimation }) => {
  const props = useSpring({ left: isAnimation ? '50vw' : '0vw' })
  return (
    <FormSignStyle style={props}>
      {isAnimation ? <SignUpForm /> : <SignInForm />}
    </FormSignStyle>
  )
}
