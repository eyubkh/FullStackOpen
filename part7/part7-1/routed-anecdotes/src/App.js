import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { RouterConfig } from './navigation'
import { Footer } from './components/Footer'
const App = () => {
  const style = {
    marginRight: '10px'
  }

  return (
    <BrowserRouter>
      <div>
        <Link style={style} to='/'>Home</Link>
        <Link style={style} to='/anecdotes'>anecdote</Link>
        <Link style={style} to='/create'>create</Link>
        <Link to='/about'>about</Link>
      </div>
      <RouterConfig />
      <Footer />
    </BrowserRouter>
  )
}

export default App
