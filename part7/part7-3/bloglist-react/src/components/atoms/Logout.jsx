import React from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/actions/userAction'
// Styled Componetns
import styled from 'styled-components'
const ButtonLogout = styled.button`
  color: '#aed9e0';
  padding: 10px 25px;
  margin-top: 15px;
  text-transform: uppercase;
  border: 0px;
  background-color: '#5e6472;';
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
`

export const Logout = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logOut())
  }
  return <ButtonLogout onClick={handleLogout}>Log Out</ButtonLogout>
}
