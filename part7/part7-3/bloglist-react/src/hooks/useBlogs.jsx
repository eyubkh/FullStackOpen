import { useEffect, useState } from 'react'
import { getBlog } from '../services/userService'

export const useBlogs = (id) => {
  const [value, setValue] = useState({})
  useEffect(async () => {
    const response = await getBlog(id)
    setValue(response)
  }, [])
  return value
}
