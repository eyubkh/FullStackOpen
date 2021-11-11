import React from 'react'

import { Route, Redirect } from 'react-router-dom'
import { LOGINPAGE } from '../CONSTANTS'

export const ProtectedRouter = ({ auth: isAuth, component: Component, ...rest }) => {
  const render = (props) => {
    if (isAuth) {
      return <Component />
    } else {
      return <Redirect to={{ pathname: LOGINPAGE, state: { from: props.location } }} />
    }
  }
  return <Route {...rest} render={render} />
}
