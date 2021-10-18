const initialState = {
  good: 0,
  neutral: 0,
  bad: 0
}

export const counterReducer = (state = initialState, action) => {
  switch(action.type){
    case '@counter/good':
      return {...state, good: state.good + 1}
    case '@counter/bad': 
      return {...state, bad: state.bad + 1}
    case '@counter/neutral': 
    return {...state, neutral: state.neutral + 1}
    case '@counter/reset':
      return initialState
      default:
        return state
  }
}