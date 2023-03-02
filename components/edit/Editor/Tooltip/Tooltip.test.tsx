import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'

import Tooltip from './Tooltip'
import { inlineStylesBtns, blockStylesBtns } from './tooltipUtils'

describe('Tooltip', () => {
  it('renders', () => {
    const tooltipRef = React.createRef<HTMLDivElement>()
    render(
      <Tooltip
        tooltipRef={tooltipRef}
        showTooltip={true}
        currentBlockType="header-two"
        currentStyle={['BOLD']}
        setShowTooltip={() => {}}
        applyStyles={() => {}}
      />
    )

    const { getByLabelText } = screen

    inlineStylesBtns.forEach(btn => {
      expect(getByLabelText(btn.label)).toBeTruthy()
    })

    blockStylesBtns.forEach(btn => {
      expect(getByLabelText(btn.label)).toBeTruthy()
    })
    // Check if buttons are active
    // should add blue color to the BOLD btn
    expect(getByLabelText('Bold').firstChild).toHaveClass('fill-blue-500')
    // italics btn should not have blue color
    expect(getByLabelText('Italic').firstChild).not.toHaveClass('fill-blue-500')
    // should add blue color to the header-two btn
    expect(getByLabelText('Header Two').firstChild).toHaveClass('fill-blue-500')
    // header-one btn should not have blue color
    expect(getByLabelText('Header One').firstChild).not.toHaveClass('fill-blue-500')
  })
})
