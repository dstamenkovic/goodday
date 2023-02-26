import { render, screen } from '@testing-library/react'
import { EditorState } from 'draft-js'
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
        currentStyle={EditorState.createEmpty().getCurrentInlineStyle()}
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
  })
})
