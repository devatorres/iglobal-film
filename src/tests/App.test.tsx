import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from 'App'

test('should move to up when button is clicked', () => {
  render(<App />)

  const button = screen.getByRole('button')
  userEvent.click(button)

  const scroll = window.scroll
  expect(scroll).toHaveBeenCalledWith(0, 0)
})
