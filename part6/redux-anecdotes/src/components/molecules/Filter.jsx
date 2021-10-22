import React from 'react'

import { filterAction } from '../../redux/actions/filterAction'
import { Input } from '../atoms/Input'
import { useDispatch } from 'react-redux'

export const Filter = () => {
  const dispatch = useDispatch()
  const handlerFilter = (event) => {
    dispatch(filterAction(event.target.value))
  }

  return (
    <div>
      <Input handler={handlerFilter} name="filter" placeholder='filter' />
    </div>
  )
}
