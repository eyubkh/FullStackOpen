import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { goodComment, neutralComment, badComment, resetComment} from './redux/action/counterAction'

const App = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(state)
  const handlerGoodComment = () => {
    dispatch(goodComment())
  }
  const handlerNeutralComment = () => {
    dispatch(neutralComment())
  }
  const handlerBadComment = () => {
    dispatch(badComment())
  }
  const handlerResetComment = () => {
    dispatch(resetComment())
  }
   return (
    <div>
      <button onClick={handlerGoodComment}>good</button> 
      <button onClick={handlerNeutralComment}>neutral</button> 
      <button onClick={handlerBadComment}>bad</button>
      <button onClick={handlerResetComment}>reset stats</button>
      <div>good {state.good}</div>
      <div>neutral{state.neutral}</div>
      <div>bad{state.bad}</div>
    </div>
  )
}

export default App