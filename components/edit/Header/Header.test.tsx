import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from './Header'

describe('Header', () => {
  it('renders the header', () => {
    render(<Header />)
    expect(screen.getByRole('textbox', { name: /title/i })).toBeInTheDocument()
  })
})
