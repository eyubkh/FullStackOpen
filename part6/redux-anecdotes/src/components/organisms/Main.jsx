import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Anecdote } from '../molecules/Anecdote'
import { voteAction } from '../../redux/actions/anecdoteAction'

export const Main = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <main>
      {
        state.map(anecdote => <Anecdote
            key={anecdote.id}
            text={anecdote.content}
            votes={anecdote.votes}
            handlerVote={() => dispatch(voteAction(anecdote.id))}
          />)
      }
    </main>
  )
}
