import React from 'react'
import { StoryFn, Meta, StoryObj } from '@storybook/react'

import Navigation from './Navigation'

const meta: Meta<typeof Navigation> = {
  title: 'Navigation',
  component: Navigation,
}

export default meta

type Story = StoryObj<typeof Navigation>

export const Default: Story = {
  render: () => (
    <div className="flex flex-row h-screen w-full">
      <Navigation />
    </div>
  ),
}
