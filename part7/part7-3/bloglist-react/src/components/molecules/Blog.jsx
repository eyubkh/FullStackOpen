import React from 'react'

import { Title } from '../atoms/Title'
import { SubTitle } from '../atoms/SubTitle'
import { Toggle } from '../Toggle'

export const Blog = ({ url, author, title = 'unknow Ttitle' }) => {
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
