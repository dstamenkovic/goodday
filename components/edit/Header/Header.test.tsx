import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from './Header'

describe('Header', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers()
      jest.useRealTimers()
    })
  })

  it('renders the header', () => {
    render(<Header handleSave={jest.fn()} />)
    expect(screen.getByRole('textbox', { name: /title/i })).toBeInTheDocument()
  })

  it('triggers the on save handler', async () => {
    const handleSave = jest.fn()
    render(<Header handleSave={handleSave} />)

    const input = screen.getByRole('textbox', { name: /title/i })

    fireEvent.focus(input)

    fireEvent.change(input, { target: { value: 'Test title' } })

    act(() => {
      jest.runAllTimers()
    })

    await waitFor(() => expect(handleSave).toHaveBeenCalledTimes(1))
  })
})
