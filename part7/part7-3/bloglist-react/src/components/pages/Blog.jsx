import React from 'react'
// React Router
import { useRouteMatch } from 'react-router'
// Hooks
import { useBlogs } from '../../hooks/useBlogs'
// Components
import { Header } from '../organisms/Header'

export const Blog = () => {
  const id = useRouteMatch().params.id
  const blog = useBlogs(id)
  return (
    <>
    <Header />
      <h1>{blog.title}</h1>
      <a href={blog.url}>{blog.url}</a><br/>
      <span>added by {blog.author}</span>
    </>
  )
}
