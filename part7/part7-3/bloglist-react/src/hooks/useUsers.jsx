import { useEffect, useState } from 'react'
import { getAllUsers } from '../services/userService'

export const useUsers = () => {
  const [value, setValue] = useState([])
  useEffect(async () => {
    const response = await getAllUsers()
    setValue(response)
  }, [])

  const filter = (username) => {
    return value.filter(user => user.username === username)
  }

  return {
    value,
    filter
  }
}
