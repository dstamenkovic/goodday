'use client'

import { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { RawDraftContentState } from 'draft-js'

import Header from '../Header'
import Editor from '../Editor'

import { ItemType } from 'types'
import { updateItem, getItem } from 'storage'

const ClientSideWrapperEdit = () => {
  const searchParams = useSearchParams()
  const id = searchParams?.get('id')

  const [title, setTitle] = useState<string>('')
  const [editorContent, setEditorContent] = useState<RawDraftContentState | undefined>()

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
    <div className="my-4 px-4 lg:px-8 2xl:px-12">
      <Header defaultTitle={title} handleSave={handleSave} />
      <div className="mt-4 px-2 pt-5">
        <Editor defaultEditorContent={editorContent} handleSave={handleSave} />
      </div>
    </div>
  )
}

export default ClientSideWrapperEdit
