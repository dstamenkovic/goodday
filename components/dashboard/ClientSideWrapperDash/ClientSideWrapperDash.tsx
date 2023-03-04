'use client'

import { useEffect, useState } from 'react'
import { initStorage, getItems } from 'storage'

import Stack from '../Stack'
import { ItemType } from '../Item'

export default function ClientSideWrapperDash() {
  const [items, setItems] = useState<ItemType[]>([])
  useEffect(() => {
    const init = async () => {
      await initStorage()
      const itemsFromStorage = await getItems()
      setItems(itemsFromStorage)
    }
    init()
  }, [])

  return (
    <>
      <Stack items={items} />
    </>
  )
}
