import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Create from './Create'

describe('Create', () => {
  it('renders correctly', () => {
    render(<Create />)
    expect(screen.getByText('Create')).toBeInTheDocument()
  })
})
