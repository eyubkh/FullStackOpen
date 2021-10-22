import React from 'react'

import { useSelector } from 'react-redux'

const Notification = () => {
  const state = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    position: 'absolute',
    top: 0,
    right: 0
  }
  return (
    <div style={style}>
      {state}
    </div>
  )
}

export default Notification
