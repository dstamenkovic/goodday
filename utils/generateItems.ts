import { EditorState, convertToRaw } from 'draft-js'

import { ItemType } from 'types'

export const generateItems = (amount: number): Array<ItemType> => {
  const arr = Array.from(Array(amount))
  return arr.map((number, i) => ({
    id: `${i}rt`,
    title: `Title ${i + 1}`,
    editorContent: convertToRaw(EditorState.createEmpty().getCurrentContent()),
  }))
}
