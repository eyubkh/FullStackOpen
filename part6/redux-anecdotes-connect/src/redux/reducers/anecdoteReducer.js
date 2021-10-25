export const anecdotesReducer = (state = [], action) => {
  switch (action.type) {
    case '@anecdote/vote': {
      return state.map(anecdote => action.payload.id !== anecdote.id ? anecdote : action.payload)
    }
    case '@anecdote/create': {
      return state.concat(action.payload)
    }
    case '@anecdote/init_notes':
      return state.concat(action.payload)
    default:
      return state
  }
}
