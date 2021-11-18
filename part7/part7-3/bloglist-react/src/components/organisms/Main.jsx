import React from 'react'
// Styled
import styled from 'styled-components'
// Redux
import { useSelector } from 'react-redux'
// Components
import { Blog } from '../molecules/Blog'

const MainStyle = styled.div`
  color: #5e6472;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Main = () => {
  const userDataBlogs = useSelector(state => state.blogs)
  return (
    <MainStyle>
      {
        userDataBlogs.map(item => <Blog key={item.id} id={item.id} title={item.title} />)
      }
    </MainStyle>
  )
}
