import React, { useState } from 'react'

export const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(false)
  const show = { display: toggle ? '' : 'none' }
  const showView = { display: toggle ? 'none' : '' }
  return (
    <>
    <div style={show}>
      {children}
      <button onClick={() => { setToggle(!toggle) }}>cancel</button>
    </div>
    <button style={showView} onClick={() => { setToggle(!toggle) }}>view</button>
    </>
  )
}
