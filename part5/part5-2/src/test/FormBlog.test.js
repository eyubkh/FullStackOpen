import React from 'react'

import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { FormBlog } from '../components/organisms/FormBlog'

describe('<FormBlog /> ', () => {
  test('Testing the submit form ', () => {
    const mockHandler = jest.fn()
    const componentFormBlog = render(<FormBlog handler={mockHandler} />)
    const button = componentFormBlog.container.querySelector('button')
    fireEvent.submit(button)
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})
