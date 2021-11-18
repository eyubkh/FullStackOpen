import React, { useState } from 'react'

// Styled
import styled from 'styled-components'
// Components
import { FormSign } from '../organisms/FormSign'
import { FormText } from '../organisms/FormText'

const DivLogin = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
`

export const Login = () => {
  const [animation, setAnimation] = useState(false)
  const handlerSignUp = (event) => {
    event.preventDefault()
    setAnimation(!animation)
  }
  return (
    <DivLogin>
      <FormSign animation={animation} />
      <FormText animation={animation} handlerSumbit={handlerSignUp}/>
    </DivLogin>
  )
}
