import Item from './Item'
import { Meta, StoryObj } from '@storybook/react'

import { generateItems } from 'utils'

const meta: Meta<typeof Item> = {
  title: 'Dashboard/Item',
  component: Item,
}

export default meta

type Story = StoryObj<typeof Item>

export const Default: Story = {
  args: {
    item: generateItems(1)[0],
  },
}
