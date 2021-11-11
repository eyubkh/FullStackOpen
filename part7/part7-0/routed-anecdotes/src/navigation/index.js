import React, { useState } from 'react'

import { Route, Switch } from 'react-router-dom'
import { ABOUT, HOME, ANECDOTES, CREATE } from './CONSTANTS'
import { Menu } from '../components/Menu'
import { About } from '../components/About'
import { CreateNew } from '../components/CreateNew'
import { Anecdote } from '../components/Anecdote'
import { AnecdoteList } from '../components/AnecdoteList'

export const RouterConfig = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  // const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  return (
    <Switch>
      <Route path='/anecdotes/:id' >
        <Anecdote anecdotes={anecdotes} />
      </Route>
      <Route path={ANECDOTES}>
        <h1>Software anecdotes</h1>
        <AnecdoteList anecdotes={anecdotes} />
      </Route>
      <Route path={CREATE}>
      <CreateNew addNew={addNew} />
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
