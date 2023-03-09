import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Stack from './Stack'

import { generateItems } from 'utils'

describe('Stack', () => {
  it('renders correctly', () => {
    const numberOfItems = 5
    render(<Stack onCreate={jest.fn()} items={generateItems(numberOfItems)} />)

    const itemsWrapper = screen.getByTestId('dashboard-items')
    // items + create button/item
    expect(itemsWrapper.children.length).toBe(numberOfItems + 1)
  })
})
