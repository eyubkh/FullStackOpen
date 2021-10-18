const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const asObject = (anectdote, id) => ({
  content: anectdote,
  votes: 0,
  id
})

const initialState = anecdotesAtStart.map((anec, index) => asObject(anec, index))

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case '@anecdote/vote': {
      const anecdoteToUpdate = state.find(item => action.payload === item.id)
      const object = { ...anecdoteToUpdate, votes: anecdoteToUpdate.votes + 1 }
      return state.map(anecdote => action.payload !== anecdote.id ? anecdote : object)
    }
    case '@anecdote/create': {
      const object = {
        content: action.payload,
        id: state.length,
        votes: 0
      }
      return state.concat(object)
    }
    default:
      return state
  }
}
