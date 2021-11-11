import React, { useEffect } from 'react'
// Redux Provider
import { useDispatch } from 'react-redux'
import { setUserByToken } from './redux/actions/userAction'
// React Router
import { RouterConfig } from './router'
import { BrowserRouter } from 'react-router-dom'

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setUserByToken())
  }, [])
  return (

      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
  )
}

export default App
