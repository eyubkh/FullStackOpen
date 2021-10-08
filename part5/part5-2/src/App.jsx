import React, { useState, useEffect } from 'react'

import { Login } from './components/pages/Login'
import { Home } from './components/pages/Home'

import { userData, setToken, userPost } from './services/userService'

function App () {
  const [post, setPost] = useState(false)
  const [user, setUser] = useState()

  useEffect(async () => {
    const token = window.localStorage.getItem('tokenBlogs')
    if (token) {
      const tokenJSON = JSON.parse(token)
      const resultUser = await userData(tokenJSON.username)
      setUser(resultUser)
      setToken(tokenJSON.token)
    }
  }, [user !== undefined])

  const handlerLoginSetUser = (item) => {
    setUser(item)
  }

  const handlerCreate = async (event) => {
    event.preventDefault()

    const object = {
      title: event.target[0].value,
      author: user.name,
      url: event.target[1].value
    }

    const result = await userPost(object)
    user.blogs = user.blogs.concat(result)
    setPost(!post)
  }

  const handleLogout = () => {
    window.localStorage.removeItem('tokenBlogs')
    setUser()
  }
  return (
    <div>
      {user === undefined ? <Login setUser={handlerLoginSetUser} /> : <Home handleLogout={handleLogout} handler={handlerCreate} data={user.blogs} />}
    </div>
  )
}

export default App
