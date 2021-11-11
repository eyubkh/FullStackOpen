const initialAnecdotes = [
  {
    content: 'If it hurts, do it more often',
    author: 'Jez Humble',
    info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
    votes: 0,
    id: '1'
  },
  {
    content: 'Premature optimization is the root of all evil',
    author: 'Donald Knuth',
    info: 'http://wiki.c2.com/?PrematureOptimization',
    votes: 0,
    id: '2'
  }
]

export const anecdoteReducer = (state = initialAnecdotes, action) => {
  switch (action.type) {
    case '@anecdote/new': {
      action.payload.id = Math.floor(Math.random() * 999999).toString()
      return state.concat(action.payload)
    }
    default:
      return state
  }
}
