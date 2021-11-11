import React from 'react'

import { Route, Switch } from 'react-router-dom'
import { ABOUT, HOME, ANECDOTES, CREATE } from './CONSTANTS'
import { Menu } from '../components/Menu'
import { About } from '../components/About'
import { CreateNew } from '../components/CreateNew'
import { Anecdote } from '../components/Anecdote'
import { AnecdoteList } from '../components/AnecdoteList'

export const RouterConfig = () => {
  return (
    <Switch>
      <Route path='/anecdotes/:id' >
        <Anecdote />
      </Route>
      <Route path={ANECDOTES}>
        <h1>Software anecdotes</h1>
        <AnecdoteList/>
      </Route>
      <Route path={CREATE}>
      <CreateNew />
      </Route>
      <Route path={ABOUT}>
        <About />
      </Route>
      <Route path={HOME}>
        <Menu />
      </Route>
    </Switch>
  )
}
