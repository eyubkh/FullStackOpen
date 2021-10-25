import React from 'react'

import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import { connect } from 'react-redux'
import { newNoteAction } from '../../redux/actions/anecdoteAction'
import { createNotification } from '../../redux/actions/notificationAction'

const CreateNote = (props) => {
  const handlerSumbit = async (event) => {
    event.preventDefault()
    const { note } = event.target.children
    const content = note.value
    props.newNoteAction(content)
    setTimeout(() => {
      props.createNotification(content)
    }, 100)
  }
  return (
    <form onSubmit={handlerSumbit}>
      <Input name="note" placeholder="new" />
      <Button text="create" />
    </form>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    newNoteAction: value => {
      dispatch(newNoteAction(value))
    },
    createNotification: value => {
      dispatch(createNotification(value))
    }
  }
}

const ConnectCreateNotes = connect(null, mapDispatchToProps)(CreateNote)
export default ConnectCreateNotes
