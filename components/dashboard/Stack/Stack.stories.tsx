import Stack from './Stack'
import { Meta, StoryObj } from '@storybook/react'

const generateItems = (amount: number): Array<{ id: string; title: string }> => {
  const arr = Array.from(Array(amount))
  return arr.map((number, i) => ({
    id: `${i}rt`,
    title: `Title ${i + 1}`,
  }))
}

const meta: Meta<typeof Stack> = {
  title: 'Dashboard/Stack',
  component: Stack,
}

export default meta

type Story = StoryObj<typeof Stack>

export const Default: Story = {
  args: { items: generateItems(4) },
}
