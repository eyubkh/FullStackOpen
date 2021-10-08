import React, { useEffect, useState } from 'react'

import { Title } from '../atoms/Title'
import { SubTitle } from '../atoms/SubTitle'
import { Toggle } from '../Toggle'
import { getBlog } from '../../services/userService'

export const Blog = ({ id, title = 'unknow Ttitle' }) => {
  const [blog, setBlog] = useState({})
  useEffect(async () => {
    const result = await getBlog(id)
    setBlog(result)
  }, [])
  return (
    <article>
      <Title text={title} />
      <Toggle>
       <SubTitle text={blog.url} /><br></br>
       <SubTitle text={blog.author} />
      </Toggle>
    </article>
  )
}
