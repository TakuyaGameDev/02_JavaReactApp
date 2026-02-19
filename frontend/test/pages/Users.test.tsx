import { render, screen } from '@testing-library/react'
import Users from '@/pages/Users'

test('タイトルが表示される', () => {
  render(<Users />)
  expect(screen.getByText('Users')).toBeInTheDocument()
})