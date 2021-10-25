import { getAll, createNote, voteNote } from '../../service/index'

export const voteAction = (object) => {
  return async dispatch => {
    const response = await voteNote(object)
    dispatch({
      type: '@anecdote/vote',
      payload: response
    })
  }
}

export const newNoteAction = (content) => {
  return async dispatch => {
    const response = await createNote(content)
    dispatch({
      type: '@anecdote/create',
      payload: response
    })
  }
}

export const initNotes = () => {
  return async dispatch => {
    const response = await getAll()
    dispatch({
      type: '@anecdote/init_notes',
      payload: response
    })
  }
}
