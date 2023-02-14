'use client'
import { useState } from 'react'
import { Editor, EditorState } from 'draft-js'

const EditorComponent = () => {
  const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty())
  return <Editor editorState={editorState} onChange={setEditorState} />
}

export default EditorComponent
