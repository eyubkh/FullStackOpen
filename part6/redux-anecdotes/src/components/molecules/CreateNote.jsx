import React from 'react'

import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import { useDispatch } from 'react-redux'
import { newNoteAction } from '../../redux/actions/anecdoteAction'
import { createNotification } from '../../redux/actions/notificationAction'

export const CreateNote = () => {
  const dispatch = useDispatch()
  const handlerSumbit = async (event) => {
    event.preventDefault()
    const { note } = event.target.children
    const content = note.value
    dispatch(newNoteAction(content))
    setTimeout(() => {
      dispatch(createNotification(content))
    }, 100)
  }
  return (
    <form onSubmit={handlerSumbit}>
      <Input name="note" placeholder="new" />
      <Button text="create" />
    </form>
  )
}
