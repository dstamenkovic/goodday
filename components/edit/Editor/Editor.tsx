'use client'
import { useState, useRef } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css'

import Tooltip from './Tooltip'
import { AllowedStyles, AllowedBlockStyles } from './Tooltip/tooltipUtils'

const isBlockStyle = (style: AllowedStyles): style is AllowedBlockStyles => {
  return ['header-one', 'header-two', 'header-three'].includes(style)
}

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

  const applyStyles = (style: AllowedStyles): void => {
    let newState = editorState

    if (isBlockStyle(style)) {
      newState = RichUtils.toggleBlockType(newState, style)
    } else {
      newState = RichUtils.toggleInlineStyle(newState, style)
    }
    setEditorState(newState)
  }

  return (
    <>
      <Tooltip
        showTooltip={showTooltip}
        tooltipRef={tooltipRef}
        applyStyles={applyStyles}
        setShowTooltip={setShowTooltip}
        currentStyle={editorState.getCurrentInlineStyle().toJS()}
        currentBlockType={editorState
          .getCurrentContent()
          .getBlockForKey(editorState.getSelection().getStartKey())
          .getType()}
      />
      <Editor editorState={editorState} onChange={onChange} placeholder="What's on your mind?" />
    </>
  )
}

export default EditorComponent
