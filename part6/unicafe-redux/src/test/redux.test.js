import deepFreeze from 'deep-freeze'
import { counterReducer } from '../redux/reducer/countreReducer'

describe('Testing redux' , () => {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  deepFreeze(state)
  test('Do nothing...', () => {
    const action = {
      type: 'DO_NOTHING'
    }
    const newState = counterReducer(state ,action)
    expect(newState).toMatchObject(state)
  })

  test('Plus one Good comment' ,() => {
    const action = {
      type: '@counter/good'
    }

    const newState = counterReducer(state, action)
    expect(newState).toMatchObject({good: 1,neutral: 0,bad: 0})
  })
})