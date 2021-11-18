import React from 'react'
// React Router
import { Route, Switch, Link } from 'react-router-dom'
import { HOMEPAGE, LOGINPAGE, HOME, USERPAGE, USER, BLOG } from './CONSTANTS'
import { ProtectedRouter } from './auth//pretectedRoute'
import { LoginRouter } from './auth/loginRouter'
// Components
import { Login } from '../components/pages/Login'
import { Home } from '../components/pages/Home'
import { Users } from '../components/pages/Users'
import { User } from '../components/pages/User'
import { Blog } from '../components/pages/Blog'
// Redux
import { useSelector } from 'react-redux'

export const RouterConfig = () => {
  const user = useSelector(state => state)

  return (
    <Switch>
      <ProtectedRouter exact path={HOMEPAGE} component={Home} auth={user} />
      <ProtectedRouter exact path={USERPAGE} component={Users} auth={user} />
      <ProtectedRouter exact path={USER} component={User} auth={user} />
      <ProtectedRouter exact path={BLOG} component={Blog} auth={user} />
      <LoginRouter exact path={LOGINPAGE} componentUserHome={Home} componentLogin={Login} auth={user} />ß
      <Route exact path={HOME}>
        <Link style={{ padding: '10px 10px' }} to={HOMEPAGE}>USER HOME</Link>
        <Link style={{ padding: '10px 10px' }} to={USERPAGE}>USER</Link>
        <Link style={{ padding: '10px 10px' }} to={HOME}>HOME</Link>
         <h1>Home</ h1>
      </Route>
      <Route path="*">
        <h1>Not Found</h1>
      </Route>
    </Switch>
  )
}
