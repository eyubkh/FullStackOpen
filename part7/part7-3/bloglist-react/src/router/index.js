import React from 'react'
// React Router
import { Route, Switch, Link } from 'react-router-dom'
import { HOMEPAGE, LOGINPAGE, HOME } from './CONSTANTS'
import { ProtectedRouter } from './auth//pretectedRoute'
import { LoginRouter } from './auth/loginRouter'
// Components
import { Login } from '../components/pages/Login'
import { Home } from '../components/pages/Home'
import { TestLogin } from '../testComponent/pages/TestLogin'
// Redux
import { useSelector } from 'react-redux'

export const RouterConfig = () => {
  const user = useSelector(state => state)

  return (
    <Switch>
      <ProtectedRouter exact path={HOMEPAGE} component={Home} auth={user} />
      <LoginRouter exact path={LOGINPAGE} componentUserHome={Home} componentLogin={Login} auth={user} />
      <Route exact path={HOME}>
         <h1>Home</h1>
         <Link to={LOGINPAGE}>
            login
         </Link>
      </Route>
      <Route exact path='/test'>
        <TestLogin />
      </Route>
      <Route path="*">
        <h1>Not Found</h1>
      </Route>
    </Switch>
  )
}
