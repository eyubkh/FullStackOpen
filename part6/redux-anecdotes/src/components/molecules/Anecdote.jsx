import React from 'react'

import { Text } from '../atoms/Text'
import { Button } from '../atoms/Button'

export const Anecdote = ({ text, votes, handlerVote }) => {
  return (
    <article>
      <Text text={text} count={votes} />
      <Button text="vote" handler={handlerVote} />
    </article>
  )
}
