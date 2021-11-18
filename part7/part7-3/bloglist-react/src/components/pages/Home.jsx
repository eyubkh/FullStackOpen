import React, { Fragment } from 'react'
// Components
import { FormBlog } from '../organisms/FormBlog'
import { Main } from '../organisms/Main'
import { Header } from '../organisms/Header'

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <FormBlog />
      <Main />
    </Fragment>
  )
}
