import React from 'react'

import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import { useDispatch } from 'react-redux'
import { newNoteAction } from '../../redux/actions/anecdoteAction'

export const CreateNote = () => {
  const dispatch = useDispatch()
  const handlerSumbit = (event) => {
    event.preventDefault()
    const { note } = event.target.children
    const content = note.value
    dispatch(newNoteAction(content))
  }
  return (
    <form onSubmit={handlerSumbit}>
      <Input name="note" placeholder="new" />
      <Button text="create" />
    </form>
  )
}
