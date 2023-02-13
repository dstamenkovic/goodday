import Create from './Create'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Create> = {
  title: 'Dashboard/Create',
  component: Create,
}

export default meta

type Story = StoryObj<typeof Create>

export const Default: Story = {}
