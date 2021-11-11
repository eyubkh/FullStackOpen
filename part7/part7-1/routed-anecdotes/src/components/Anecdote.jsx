import React from 'react'

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Anecdote = () => {
  const anecdoteById = useSelector(state => {
    const anecdote = state.find(a => a.id === useParams().id)
    return anecdote
  })
  return (
    <>
      <h1>{anecdoteById.content} by {anecdoteById.author}</h1>
      <p>votes {anecdoteById.votes}</p>
      <p>for more info see <a href={anecdoteById.info } target="_blank" rel="noreferrer" >{anecdoteById.info}</a></p>
    </>
  )
}
