import React from 'react'

// Components
import { SignInText } from '../molecules/SignInText'
import { SignUpText } from '../molecules/SignUpText'
// Styled
import styled from 'styled-components'
// React Spirng
import { useSpring, animated } from 'react-spring'

const FormTextStyle = styled(animated.form)`
  position: absolute;
  left: 50vw;
  color: #fff;
  background-color: #ffa69e ;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  height: 100vh;
  overflow: hidden;

  input:nth-of-type(1) {
    margin: 15px 15px;
  }
  input:nth-of-type(2) {
    margin: 15px 15px;
  }
`

export const FormText = ({ animation: isAnimation, handlerSumbit }) => {
  const props = useSpring({ left: isAnimation ? '0vw' : '50vw' })
  return (
    <FormTextStyle style={props} onSubmit={handlerSumbit}>
      <SignUpText animation={isAnimation} />
      <SignInText animation={isAnimation} />
    </FormTextStyle>
  )
}
