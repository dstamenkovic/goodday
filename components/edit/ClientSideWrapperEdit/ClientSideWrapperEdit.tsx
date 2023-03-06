'use client'

import { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { RawDraftContentState } from 'draft-js'

import Header from '../Header'
import Editor from '../Editor'

import { updateItem, ItemType, getItem } from 'storage'

const ClientSideWrapperEdit = () => {
  const searchParams = useSearchParams()
  const id = searchParams?.get('id')

  const [title, setTitle] = useState<string>('')
  const [editorContent, setEditorContent] = useState<RawDraftContentState | null>(null)

  useEffect(() => {
    if (!id) return
    const retriveItem = async () => {
      const item = await getItem(id)
      if (!item) return

      setTitle(item.title)
      setEditorContent(item.editorContent)
    }

    retriveItem()
  }, [id])

  const handleSave = useCallback(
    async (updatedProps: Partial<ItemType>): Promise<void> => {
      if (!id) return
      await updateItem(id, updatedProps)
    },
    [id]
  )

  return (
    <>
      <>
        <Header defaultTitle={title} handleSave={handleSave} />
        <div className="mt-4 pl-2">
          <Editor defaultEditorContent={editorContent} handleSave={handleSave} />
        </div>
      </>
    </>
  )
}

export default ClientSideWrapperEdit
