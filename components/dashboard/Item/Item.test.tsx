import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Item from './Item'
import { generateItems } from 'utils'

describe('Item', () => {
  it('renders correctly', () => {
    const item = generateItems(1)[0]
    render(<Item item={item} />)
    expect(screen.getByText(item.title)).toBeInTheDocument()
    expect(screen.getByTitle('Edit')).toBeInTheDocument()
  })
})
