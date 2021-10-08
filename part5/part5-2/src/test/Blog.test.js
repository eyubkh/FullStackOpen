import React from 'react'

import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { Blog } from '../components/molecules/Blog'

let componentBlog
beforeEach(() => {
  componentBlog = render(<Blog title='Test' url='www.test.com' author='testUser'/>)
})

describe('<Blog /> ', () => {
  test(' Showing title but hidding author and url', () => {
    const title = componentBlog.getByText('Test')
    const toggle = componentBlog.container.querySelector('div')
    expect(toggle).toHaveStyle('display: none')
    expect(title).toBeDefined()
  })

  test('Show url and author on click', () => {
    const el = componentBlog.getByText('view')
    fireEvent.click(el)
    componentBlog.getByText('www.test.com')
    componentBlog.getByText('testUser')
    expect(el).toHaveStyle('display: none')
  })
})
