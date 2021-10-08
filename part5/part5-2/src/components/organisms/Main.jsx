import React from 'react'

import { Blog } from '../molecules/Blog'

export const Main = ({ data }) => {
  return (
    <main>
      {
        data.map(item => <Blog key={item.id} title={item.title} author={item.author} url={item.url} />)
      }
    </main>
  )
}
