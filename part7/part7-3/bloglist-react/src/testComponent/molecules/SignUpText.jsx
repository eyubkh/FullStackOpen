import React from 'react'

// Style
import styled from 'styled-components'
// React Spirng
import { useSpring, animated } from 'react-spring'
// Components
import { Title } from '../atoms/Title'
import { Span } from '../atoms/Span'
import { Button } from '../atoms/Button'

const SignUpTextStyle = styled(animated.div)`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const SignUpText = ({ animation: isAnimation }) => {
  const signUpTextAnimation = useSpring({ left: isAnimation ? '50vw' : '0vw' })
  return (
    <SignUpTextStyle style={signUpTextAnimation}>
          <Title text='Hello, Friend!' />
          <Span text='Enter your personal details and start journey with us' size={18}/>
          <Button backgroundColor='#fff' textColor='#ffa69e' handler={() => {}} text='sign up' />
      </SignUpTextStyle>
  )
}
