import { render, screen, renderHook } from '@testing-library/react'
import React from 'react'

import Tooltip from './Tooltip'

describe('Tooltip', () => {
  it('renders the tooltip', () => {
    const tooltipRef = React.createRef<HTMLDivElement>()
    render(<Tooltip tooltipRef={tooltipRef} showTooltip={true} />)

    const { getByLabelText } = screen

    expect(getByLabelText('Bold')).toBeTruthy()
    expect(getByLabelText('Italic')).toBeTruthy()
    expect(getByLabelText('Underline')).toBeTruthy()
    expect(getByLabelText('Strikethrough')).toBeTruthy()
    expect(getByLabelText('Heading 1')).toBeTruthy()
    expect(getByLabelText('Heading 2')).toBeTruthy()
    expect(getByLabelText('Heading 3')).toBeTruthy()
  })
})
