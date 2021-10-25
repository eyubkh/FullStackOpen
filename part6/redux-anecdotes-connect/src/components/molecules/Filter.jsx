import React from 'react'

import { filterAction } from '../../redux/actions/filterAction'
import { Input } from '../atoms/Input'
import { connect } from 'react-redux'

const Filter = (props) => {
  const handlerFilter = (event) => {
    props.filterAction(event.target.value)
  }

  return (
    <div>
      <Input handler={handlerFilter} name="filter" placeholder='filter' />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    filterAction: (value) => {
      dispatch(filterAction(value))
    }
  }
}

const ConnectFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectFilter
