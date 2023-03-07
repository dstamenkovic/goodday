import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Stack from './Stack'

const generateItems = (amount: number): Array<{ id: string; title: string }> => {
  const arr = Array.from(Array(amount))
  return arr.map((number, i) => ({
    id: `${i}rt`,
    title: `Title ${i + 1}`,
  }))
}

describe('Stack', () => {
  it('renders correctly', () => {
    const numberOfItems = 5
    render(<Stack onCreate={jest.fn()} items={generateItems(numberOfItems)} />)

    const itemsWrapper = screen.getByTestId('dashboard-items')
    // items + create button/item
    expect(itemsWrapper.children.length).toBe(numberOfItems + 1)
  })
})
