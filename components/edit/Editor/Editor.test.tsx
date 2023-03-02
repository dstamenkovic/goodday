import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Editor from './Editor'
// import { act } from 'react-dom/test-utils'

describe('Editor', () => {
  it('renders the editor/placeholder', () => {
    render(<Editor />)

    const placeholder = `What's on your mind?`
    expect(screen.getByText(placeholder)).toBeTruthy()
  })

  // it('shows the tooltip on selection', async () => {
  //   const { container } = render(<Editor />)

  //   const editorEl = container.querySelector('.public-DraftEditor-content')
  //   expect(editorEl).toBeInTheDocument()

  //   const { getByTestId, getByText } = screen
  //   expect(getByTestId('tooltip')).not.toHaveClass('!visible')

  //   if (editorEl) {
  //     // paste in some text
  //     fireEvent.paste(editorEl, { clipboardData: { getData: () => 'Hello editor' } })
  //     // select the text
  //     // act(() => {
  //     //   fireEvent.select(editorEl, {
  //     //     target: { selectionStart: 1, selectionEnd: 4 },
  //     //   })
  //     // })
  //     // tooltip should be visible
  //     await waitFor(() => {
  //       expect(getByTestId('tooltip')).toHaveClass('!visible')
  //     })
  //   }
  // })
})
