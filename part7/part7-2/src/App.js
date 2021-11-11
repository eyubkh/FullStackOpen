import { useState } from 'react'

const App = () => {
  const [ counter , setCounter ] = useState(0)
  const [ value , setValue ] = useState()
  const handleClick = () => {
    setCounter(counter + 1)
    setValue(value.concat(counter))
  }
  return (
    <div>
      <h3>{counter}</h3>
      <p>{PRODUCTION}</p>
      <h1>Hello webpack!</h1>
      <button onClick={handleClick}> Add </button>
    </div>
  )
}

export default App