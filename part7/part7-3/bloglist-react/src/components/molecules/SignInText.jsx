import React from 'react'
// Style
import styled from 'styled-components'
// React Spring
import { useSpring, animated } from 'react-spring'
// Components
import { Title } from '../atoms/Title'
import { Span } from '../atoms/Span'
import { Button } from '../atoms/Button'

const SignInTextStyle = styled(animated.div)`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
export const SignInText = ({ animation: isAnimation }) => {
  const signInTextAnimation = useSpring({ left: isAnimation ? '0vw' : '-50vw' })
  return (
    <SignInTextStyle style={signInTextAnimation}>
        <Title text='Welcome Back!' />
        <Span text='To keep connected with us please login with your personal info' size={18}/>
        <Button backgroundColor='#fff' textColor='#ffa69e' handler={() => {}} text='sign In' />
    </SignInTextStyle>
  )
}
