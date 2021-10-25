import React, { Fragment } from 'react'

import { Header } from '../organisms/Header'
import Main from '../organisms/Main'
import Notification from '../Notification'

export const Home = () => {
  return (
    <Fragment>
      <Notification />
      <Header />
      <Main />
    </Fragment>
  )
}
