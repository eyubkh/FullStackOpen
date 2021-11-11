import React from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/actions/userAction'
// Styled Componetns
import styled from 'styled-components'
const ButtonLogout = styled.button`
  padding: 5px 10px;
  cursor: pointer;
`

export const Logout = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logOut())
  }
  return <ButtonLogout onClick={handleLogout}>Log out</ButtonLogout>
}
