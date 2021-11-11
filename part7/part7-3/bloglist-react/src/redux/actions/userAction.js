// Services
import { loginAuth, userData, setToken, userPost } from '../../services/userService'

export const setUserAction = (object) => {
  return async dispatch => {
    const responseAuth = await loginAuth(object)
    if (!responseAuth.error) {
      const responseUserData = await userData(responseAuth.username)
      window.localStorage.setItem('tokenBlogs', JSON.stringify(responseAuth))
      dispatch({
        type: '@user/successByPassword',
        payload: responseUserData
      })
    }
  }
}

export const setUserByToken = () => {
  return async dispatch => {
    const token = window.localStorage.getItem('tokenBlogs')
    if (token) {
      const tokenJSON = JSON.parse(token)
      const responsUserData = await userData(tokenJSON.username)
      setToken(tokenJSON.token)
      dispatch({
        type: '@user/accessByToken',
        payload: responsUserData
      })
    }
  }
}

export const userPostBlog = (object) => {
  return async dispatch => {
    const payload = await userPost(object)
    dispatch({
      type: '@user/post',
      payload
    })
  }
}

export const logOut = () => ({
  type: '@user/logout'
})
