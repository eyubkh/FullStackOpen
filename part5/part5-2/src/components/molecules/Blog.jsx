import React from 'react'

import { Title } from '../atoms/Title'
import { SubTitle } from '../atoms/SubTitle'
import { Toggle } from '../Toggle'

export const Blog = ({ title = 'unknow Title', url = 'No url', author = 'No author' }) => {
  return (
    <article>
      <Title text={title} />
      <Toggle>
       <SubTitle text={url} /><br></br>
       <SubTitle text={author} />
      </Toggle>
    </article>
  )
}
