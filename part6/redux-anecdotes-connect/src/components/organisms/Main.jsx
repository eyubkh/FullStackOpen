import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Anecdote } from '../molecules/Anecdote'
import { voteAction, initNotes } from '../../redux/actions/anecdoteAction'
import { voteNotification } from '../../redux/actions/notificationAction'

const Main = (props) => {
  console.log(props)
  const { dispatch } = props
  useEffect(() => {
    dispatch(initNotes())
  }, [])

  const newState = (state) => {
    const filter = new RegExp(props.filter, 'ig')
    return state
      .filter(anecdote => {
        return filter.test(anecdote.content) ? anecdote : ''
      })
  }
  const state = newState(props.anecdotes)

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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
    notification: state.notification
  }
}

const ConnectMain = connect(mapStateToProps)(Main)
export default ConnectMain
