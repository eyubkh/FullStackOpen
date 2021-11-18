import React from 'react'
// React Router
import { useRouteMatch } from 'react-router-dom'
// Components
import { Title } from '../atoms/Title'
import { Span } from '../atoms/Span'
import { SubTitle } from '../atoms/SubTitle'
import { useUsers } from '../../hooks/useUsers'
import { Header } from '../organisms/Header'

export const User = () => {
  const username = useRouteMatch().params.username
  const user = useUsers().filter(username)

  return (
    <>
    <Header />
    <Title text='Blogs' />
    <SubTitle text={user.map(item => item.username)} />
    {
      user.map(item => item.blogs.map(blog => <Span key={blog.id} text={blog.title} />))
    }
    </>
  )
}
