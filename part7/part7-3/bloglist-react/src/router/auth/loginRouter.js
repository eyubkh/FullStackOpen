import React from 'react'

import { Route, Redirect } from 'react-router-dom'
import { HOMEPAGE } from '../CONSTANTS'

export const LoginRouter = ({ componentLogin: Login, componentUserHome: Home, auth: isAuth, ...rest }) => {
  const render = () => {
    if (isAuth) {
      return <Redirect to={HOMEPAGE} />
    } else {
      return <Login />
    }
  }
  return <Route {...rest} render={render} />
}
