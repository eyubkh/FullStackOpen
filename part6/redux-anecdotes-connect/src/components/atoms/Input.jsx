import React from 'react'

export const Input = ({ name, placeholder, handler }) => {
  return <input onChange={handler} name={name} placeholder={placeholder} />
}
