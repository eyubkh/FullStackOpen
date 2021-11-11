import React from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const AnecdoteList = () => {
  const anecdotes = useSelector(state => state)
  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote => {
          return (
            <Link key={anecdote.id} to={`/anecdotes/${anecdote.id}`}>
              <li >{anecdote.content}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
