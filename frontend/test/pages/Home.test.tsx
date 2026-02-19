import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import Home from '@/pages/Home'

vi.mock('@/api/testApi', () => ({
  fetchTest: vi.fn().mockResolvedValue([
    { id: 1, name: 'Taro' }
  ])
}))

test('タイトルが表示される', () => {
  render(<Home />)
  expect(screen.getByText('Home')).toBeInTheDocument()
})

test('一覧が表示される', async () => {
  render(<Home />)
  expect(await screen.findByText('1:Taro')).toBeInTheDocument()
})
