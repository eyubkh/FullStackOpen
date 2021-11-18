import React, { Fragment } from 'react'
import styled from 'styled-components'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { userPostBlog } from '../../redux/actions/userAction'
// Components
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { Title } from '../atoms/Title'

const FormStyle = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0px;
  color: #5e6472;
`

export const FormBlog = () => {
  const dispatch = useDispatch()
  const author = useSelector(state => state.name)
  const handlerCreate = (event) => {
    event.preventDefault()
    const object = {
      title: event.target[0].value,
      author,
      url: event.target[1].value
    }
    dispatch(userPostBlog(object))
  }
  return (
    <Fragment>
      <FormStyle onSubmit={handlerCreate}>
        <Title text='Create Blog' />
        <Input type='text' placeHolder='Title' />
        <Input type='text' placeHolder='Url' />
        <Button text='create' />
      </FormStyle>
    </Fragment>
  )
}
