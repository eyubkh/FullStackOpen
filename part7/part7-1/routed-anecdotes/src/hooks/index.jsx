import { useState } from 'react'

export const useField = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handlerChange = (event) => {
    setValue(event.target.value)
  }
  const handlerReset = () => {
    setValue('')
  }

  return {
    value,
    onChange: handlerChange,
    handlerReset
  }
}
