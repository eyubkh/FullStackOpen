import React from 'react'

import { CreateNote } from '../molecules/CreateNote'
import { Filter } from '../molecules/Filter'

export const Header = () => {
  return (
    <header>
      <CreateNote />
      <Filter />
    </header>
  )
}
