import React from 'react'
import { Link } from 'react-router-dom'

import { RouterConfig } from './navigation'
import { Footer } from './components/Footer'
const App = () => {
  const style = {
    marginRight: '10px'
  }

  return (
    <div>
      <div>
        <Link style={style} to='/'>Home</Link>
        <Link style={style} to='/anecdotes'>anecdote</Link>
        <Link style={style} to='/create'>create</Link>
        <Link to='/about'>about</Link>
      </div>
      <RouterConfig />
      <Footer />
    </div>
  )
}

export default App
