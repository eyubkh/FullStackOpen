import React from 'react'

import styled from 'styled-components'

const ButtonLogout = styled.button`
  padding: 5px 10px;
  cursor: pointer;
`

export const Logout = ({ handleLogout }) => {
  return <ButtonLogout onClick={handleLogout}>Log out</ButtonLogout>
}
