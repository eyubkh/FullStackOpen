export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case '@filter':
      return action.payload
    default:
      return state
  }
}
