import Item from './Item'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Item> = {
  title: 'Dashboard/Item',
  component: Item,
}

export default meta

type Story = StoryObj<typeof Item>

export const Default: Story = {
  args: {
    item: { id: '1rt', title: 'Item 1 title long' },
  },
}
