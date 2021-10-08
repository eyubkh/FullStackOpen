import React from 'react'

import { FormBlog } from '../organisms/FormBlog'
import { Main } from '../organisms/Main'
import { Logout } from '../atoms/Logout'

export const Home = ({ handleLogout, handler, data }) => {
  return (
    <>
      <Logout handleLogout={handleLogout} />
      <FormBlog handler={handler} />
      <Main data={data} />
    </>
  )
}
