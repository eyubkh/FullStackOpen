import React from 'react'

// Redux
import { useSelector } from 'react-redux'
// Components
import { Blog } from '../molecules/Blog'

export const Main = () => {
  const userDataBlogs = useSelector(state => state.blogs)
  return (
    <main>
      {
        userDataBlogs.map(item => <Blog key={item.id} url={item.url} author={item.author} id={item.id} title={item.title} />)
      }
    </main>
  )
}
