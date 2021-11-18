import React from 'react'
// Style
import styled from 'styled-components'
// React Router
import { Link } from 'react-router-dom'

const ArticleStyle = styled.article`
  background-color: #ffa69e;
  margin: 10px 0;
  padding: 30px 0;
  text-align: center;
  width: 75%;
`

export const Blog = ({ id, title = 'unknow Title' }) => {
  return (
    <ArticleStyle>
      <Link to={`/blogs/${id}`} >
      {title}
      </Link>
    </ArticleStyle>
  )
}
