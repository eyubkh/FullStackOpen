import React from 'react'

import { Title } from '../atoms/Title'
import { SubTitle } from '../atoms/SubTitle'

export const Blog = ({ author, title }) => {
  return (
    <article>
      <Title text={title} />
      <SubTitle text={author} />
    </article>
  )
}
