import React from 'react'
// Redux
import { useSelector } from 'react-redux'
// React Router
import { Link } from 'react-router-dom'
import { HOMEPAGE, USERPAGE, HOME } from '../../router/CONSTANTS'
// Components
import { Logout } from '../atoms/Logout'
import { Span } from '../atoms/Span'
export const Header = () => {
  const store = useSelector(state => state)
  return (
    <nav>
      <Link style={{ padding: '10px 10px' }} to={HOMEPAGE}>USER HOME</Link>
      <Link style={{ padding: '10px 10px' }} to={USERPAGE}>USER</Link>
      <Link style={{ padding: '10px 10px' }} to={HOME}>HOME</Link>
      <Logout />
      <Span text={`${store.username} login in`} />
    </nav>
  )
}
