const initialState = 'render notification...'

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case '@notification/create':
      return `Added new anecdote ${action.payload}`
    case '@notification/vote': {
      console.log(action.payload)
      return `you voted ${action.payload}`
    }
    default:
      return 'something wrong...'
  }
}
