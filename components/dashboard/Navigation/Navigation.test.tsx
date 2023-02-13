import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders correctly', () => {
    render(<Navigation />)
    expect(screen.getByText('home')).toBeInTheDocument()
    expect(screen.getByText('settings')).toBeInTheDocument()
  })
})
