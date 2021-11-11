import React from 'react'

import { Blog } from '../molecules/Blog'

export const Main = ({ data }) => {
  return (
    <main>
      {
        data.map(item => <Blog key={item.id} id={item.id} title={item.title} />)
      }
    </main>
  )
}
