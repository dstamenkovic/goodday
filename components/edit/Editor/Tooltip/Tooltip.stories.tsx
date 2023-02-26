import Tooltip from './Tooltip'

import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tooltip> = {
  title: 'Edit/Tooltip',
  component: Tooltip,
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Visible: Story = {
  args: {
    showTooltip: true,
    currentStyle: [],
    applyStyles: () => {},
    setShowTooltip: () => {},
  },
}

export const VisibleWithActiveStyles: Story = {
  args: {
    showTooltip: true,
    applyStyles: () => {},
    setShowTooltip: () => {},
    currentStyle: ['BOLD', 'ITALIC'],
    currentBlockType: 'header-two',
  },
}
