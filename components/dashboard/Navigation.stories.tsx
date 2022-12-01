import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Navigation from './Navigation'

export default {
  title: 'Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>

export const Default: ComponentStory<typeof Navigation> = () => (
  <div className="flex flex-row h-screen w-full">
    <Navigation />
  </div>
)
