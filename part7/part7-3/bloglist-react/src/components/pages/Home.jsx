import React, { Fragment } from 'react'

import { FormBlog } from '../organisms/FormBlog'
import { Main } from '../organisms/Main'
import { Logout } from '../atoms/Logout'

export const Home = () => {
  return (
    <Fragment>
      <Logout />
      <FormBlog />
      <Main />
    </Fragment>
  )
}
