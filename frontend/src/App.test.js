import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Blog from './components/Blog'
import BlogForm from './components/BlogForm'

test('renders content', () => {
  const blog = {
    title: 'Test Blog',
    author: 'Test Author',
    content: 'http://test.com',
    date: 'date'   
  }

  render(<Blog blog={blog}/>)

  const header = screen.getByText('Test Blog by Test Author on date')
  expect(header).toBeDefined()

  const content = screen.getByText('http://test.com')
  expect(content).toBeDefined()
})
test('create a blog', () => {
  const mockHandler = jest.fn()
  const { container } = render(<BlogForm submit={mockHandler} />)

  const user = userEvent.setup()

  const title = container.querySelector('#title-input')
  const content = container.querySelector('#content-input')

  const submit = screen.getByText('create')

  user.type(title, 'Test Blog')
  user.type(content, 'http://test.com')
  user.click(submit)
  console.log(mockHandler.mock)
  expect(mockHandler.mock.calls)
    .toHaveLength(1)
    .toHaveProperty('title', 'Test Blog')
    .toHaveProperty('content', 'http://test.com')
})