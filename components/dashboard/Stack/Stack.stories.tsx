import Stack from './Stack'
import { Meta, StoryObj } from '@storybook/react'

import { generateItems } from 'utils'

const meta: Meta<typeof Stack> = {
  title: 'Dashboard/Stack',
  component: Stack,
}

export default meta

type Story = StoryObj<typeof Stack>

export const Default: Story = {
  args: { items: generateItems(4) },
}
