import React from 'react'
// React Router
import { Link } from 'react-router-dom'
// Components
import { Title } from '../atoms/Title'
import { useUsers } from '../../hooks/useUsers'
import { Header } from '../organisms/Header'

export const Users = () => {
  const users = useUsers().value
  return (
    <>
    <Header />
    <Title text='users' />
    {
      users.map(user => {
        return (
          <div key={user.id}>
            <Link to={`/user/${user.username}`}> {user.name} </Link>
          <h4 >{user.name}</h4> posts: {user.blogs.length}
          </div>
        )
      })
    }
    </>
  )
}
