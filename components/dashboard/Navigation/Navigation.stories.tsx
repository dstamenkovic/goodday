import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import Navigation from './Navigation'

const meta: Meta<typeof Navigation> = {
  title: 'Dashboard/Navigation',
  component: Navigation,
}

export default meta

type Story = StoryObj<typeof Navigation>

export const Default: Story = {
  render: () => (
    <div className="flex h-screen w-full flex-row">
      <Navigation />
    </div>
  ),
}
