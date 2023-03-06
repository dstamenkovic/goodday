'use client'
import { useState, useRef, useEffect } from 'react'
import {
  Editor,
  EditorState,
  RichUtils,
  RawDraftContentState,
  convertFromRaw,
  convertToRaw,
} from 'draft-js'
import 'draft-js/dist/Draft.css'

import Tooltip from './Tooltip'
import { AllowedStyles, AllowedBlockStyles } from './Tooltip/tooltipUtils'
import { ItemType } from 'storage'

const isBlockStyle = (style: AllowedStyles): style is AllowedBlockStyles => {
  return ['header-one', 'header-two', 'header-three'].includes(style)
}

type Props = {
  handleSave: ({ editorContent }: { editorContent: RawDraftContentState }) => Promise<void>
  defaultEditorContent: RawDraftContentState | null
}

const EditorComponent = ({ handleSave, defaultEditorContent }: Props) => {
  const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty())
  const [showTooltip, setShowTooltip] = useState<boolean>(false)
  const [staredEditing, setStaredEditing] = useState<boolean>(false)
  editorState.getSelection()
  const tooltipRef = useRef<HTMLDivElement>(null)

  // set editor state on mount
  useEffect(() => {
    if (defaultEditorContent?.blocks && defaultEditorContent.blocks.length > 0) {
      setEditorState(EditorState.createWithContent(convertFromRaw(defaultEditorContent)))
    }
  }, [defaultEditorContent])

  // trigger save when the user stops interacting with the editor
  useEffect(() => {
    if (!staredEditing) return

    const timeout = setTimeout(() => {
      console.log('editor saving...')
      handleSave({ editorContent: convertToRaw(editorState.getCurrentContent()) })
    }, 1000)

    return () => clearTimeout(timeout)
  }, [editorState, handleSave, staredEditing])

  const onChange = (editorState: EditorState): void => {
    if (!staredEditing) setStaredEditing(true)

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
