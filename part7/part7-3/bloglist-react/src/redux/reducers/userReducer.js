export const userReducer = (state = null, action) => {
  switch (action.type) {
    case '@user/successByPassword': {
      return action.payload
    }
    case '@user/accessByToken': {
      return action.payload
    }
    case '@user/logout': {
      window.localStorage.removeItem('tokenBlogs')
      return null
    }
    case '@user/post': {
      const newBlogs = state.blogs.concat(action.payload)
      return { ...state, blogs: newBlogs }
    }
    default:
      return state
  }
}
