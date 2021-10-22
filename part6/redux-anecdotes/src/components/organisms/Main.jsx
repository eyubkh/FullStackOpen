import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Anecdote } from '../molecules/Anecdote'
import { voteAction, initNotes } from '../../redux/actions/anecdoteAction'
import { voteNotification } from '../../redux/actions/notificationAction'

export const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initNotes())
  }, [])

  const state = useSelector(state => {
    const filter = new RegExp(state.filter, 'ig')
    return state.anecdotes
      .filter(anecdote => {
        return filter.test(anecdote.content) ? anecdote : ''
      })
  })

  const handlerVote = (anecdote) => {
    setTimeout(() => {
      dispatch(voteNotification(anecdote.content))
    }, 100)
    dispatch(voteAction(anecdote))
  }
  return (
    <main>
      {
        state.map(anecdote => <Anecdote
            key={anecdote.id}
            text={anecdote.content}
            votes={anecdote.votes}
            handlerVote={() => handlerVote(anecdote)}
          />)
      }
    </main>
  )
}
