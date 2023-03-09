import { RawDraftContentState } from 'draft-js'

export interface ItemType {
  id: string
  title: string
  editorContent: RawDraftContentState
}
