import React, { useState } from 'react'

// Styled
import styled from 'styled-components'
// Components
import { FormSign } from '../organisms/FormSign'
import { FormText } from '../organisms/FormText'

const DivForm = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
`

export const TestLogin = () => {
  const [animation, setAnimation] = useState(false)
  const handlerSignUp = (event) => {
    event.preventDefault()
    setAnimation(!animation)
  }
  return (
    <DivForm>
      <FormSign animation={animation} />
      <FormText animation={animation} handlerSumbit={handlerSignUp}/>
    </DivForm>
  )
}
