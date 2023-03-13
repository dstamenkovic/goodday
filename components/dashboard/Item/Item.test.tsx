import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Item from './Item'
import { generateItems } from 'utils'

describe('Item', () => {
  it('renders correctly', () => {
    const item = generateItems(1)[0]
    render(<Item item={item} deleteHandler={jest.fn()} />)
    expect(screen.getByText(item.title)).toBeInTheDocument()
    expect(screen.getByTitle('Edit')).toBeInTheDocument()
  })

  it('calls the deleteHandler when the delete button is clicked', () => {
    const item = generateItems(1)[0]
    const deleteHandler = jest.fn()
    render(<Item item={item} deleteHandler={deleteHandler} />)
    screen.getByLabelText('Delete').click()
    expect(deleteHandler).toHaveBeenCalledWith(item.id)
  })
})
