'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { getItems, createItem, deleteItem } from 'storage'
import Stack from '../Stack'
import { ItemType } from 'types'

export default function ClientSideWrapperDash() {
  const [items, setItems] = useState<ItemType[]>([])

  const router = useRouter()

  useEffect(() => {
    const init = async () => {
      const itemsFromStorage = await getItems()
      setItems(itemsFromStorage)
    }
    init()
  }, [])

  const onCreateHandler = async (): Promise<void> => {
    const { id } = await createItem()
    router.push(`/edit?id=${id}`)
  }

  const onDeleteHandler = async (id: string): Promise<void> => {
    await deleteItem(id)
    const itemsFromStorage = await getItems()
    setItems(itemsFromStorage)
  }

  return (
    <>
      <Stack items={items} onCreate={onCreateHandler} onDelete={onDeleteHandler} />
    </>
  )
}
