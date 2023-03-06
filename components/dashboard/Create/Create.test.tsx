import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Create from './Create'

describe('Create', () => {
  it('renders correctly', () => {
    render(<Create onClickHandler={jest.fn()} />)
    expect(screen.getByText('Create')).toBeInTheDocument()
  })

  it('calls onClickHandler when clicked', () => {
    const onClickHandler = jest.fn()
    const { container } = render(<Create onClickHandler={onClickHandler} />)
    fireEvent.click(container.querySelector('.item')!)
    expect(onClickHandler).toHaveBeenCalled()
  })
})
