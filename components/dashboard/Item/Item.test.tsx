import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Item from './Item'

describe('Item', () => {
  it('renders correctly', () => {
    const item = { title: 'Title', id: 'someId1' }
    render(<Item item={item} />)
    expect(screen.getByText(item.title)).toBeInTheDocument()
  })
})
