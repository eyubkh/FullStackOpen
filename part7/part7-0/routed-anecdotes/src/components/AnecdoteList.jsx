import React from 'react'

import { Link } from 'react-router-dom'

export const AnecdoteList = ({ anecdotes }) => (
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
