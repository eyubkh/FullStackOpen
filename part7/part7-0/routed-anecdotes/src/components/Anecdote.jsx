import React from 'react'

import { useParams } from 'react-router-dom'

export const Anecdote = ({ anecdotes }) => {
  const anecdoteById = anecdotes.find(a => a.id === useParams().id)
  return (
    <>
      <h1>{anecdoteById.content} by {anecdoteById.author}</h1>
      <p>votes {anecdoteById.votes}</p>
      <p>for more info see <a href={anecdoteById.info } target="_blank" rel="noreferrer" >{anecdoteById.info}</a></p>
    </>
  )
}
