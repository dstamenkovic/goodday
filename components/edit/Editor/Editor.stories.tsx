import { Meta, StoryObj } from '@storybook/react'

import Editor from './Editor'

const meta: Meta<typeof Editor> = {
  title: 'Edit/Editor',
  component: Editor,
}

export default meta

type Story = StoryObj<typeof Editor>

export const Default: Story = {
  decorators: [
    Story => (
      <div className="my-10 mx-4">
        <Story />
      </div>
    ),
  ],
}
