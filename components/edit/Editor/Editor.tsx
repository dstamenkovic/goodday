'use client'
import { useState, useRef } from 'react'
import { Editor, EditorState } from 'draft-js'

import Tooltip from './Tooltip'

const EditorComponent = () => {
  const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty())
  const [showTooltip, setShowTooltip] = useState<boolean>(false)
  editorState.getSelection()
  const tooltipRef = useRef<HTMLDivElement>(null)

  const onChange = (editorState: EditorState): void => {
    const selection = editorState.getSelection()

    const textIsSelected = selection.getAnchorOffset() !== selection.getFocusOffset()

    setShowTooltip(textIsSelected)
    if (textIsSelected) positionTooltip()

    setEditorState(editorState)
  }

  const positionTooltip = (): void => {
    const selection = window.getSelection()
    const range = selection?.rangeCount ? selection?.getRangeAt(0) : null

    if (!range) return

    const rect = range.getClientRects()[0]
    if (!rect) return

    const { left, top, width, height } = rect

    const tooltip = tooltipRef.current
    if (!tooltip) return

    const selectionCenter = left + width / 2
    const tooltipWidth = tooltip.offsetWidth

    let tooltipLeft = selectionCenter - tooltipWidth / 2
    tooltipLeft = tooltipLeft < 1 ? 0 : tooltipLeft

    const tooltipTop = top - height - 35

    tooltip.style.left = `${tooltipLeft}px`
    tooltip.style.top = `${tooltipTop}px`
  }

  return (
    <>
      <Tooltip showTooltip={showTooltip} tooltipRef={tooltipRef} />
      <Editor editorState={editorState} onChange={onChange} />
    </>
  )
}

export default EditorComponent
