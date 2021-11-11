import React from 'react'

import { useHistory } from 'react-router-dom'
import { useField } from '../hooks/index'
import { useDispatch } from 'react-redux'
import { add } from '../redux/actions/anecdoteAction'

export const CreateNew = () => {
  const { handlerReset: contentReset, ...content } = useField('')
  const { handlerReset: authorReset, ...author } = useField('')
  const { handlerReset: infoReset, ...info } = useField('')
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const object = {
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    }
    dispatch(add(object))
    history.push('/anecdotes')
  }

  const handleReset = (event) => {
    event.preventDefault()
    contentReset()
    authorReset()
    infoReset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' {...content} />
        </div>
        <div>
          author
          <input name='author' {...author}/>
        </div>
        <div>
          url for more info
          <input name='info' {...info}/>
        </div>
          <button>create</button>
      </form>
          <button onClick={handleReset}>reset</button>
    </div>
  )
}
