import { EditorState, convertToRaw } from 'draft-js'
import localforage from 'localforage'

import { ItemType } from 'types/Item'

let store: LocalForage = localforage.createInstance({
  name: 'doam',
})

export const getItems = async (): Promise<Array<ItemType>> => {
  const getItems: string | null = await store.getItem('items')
  if (getItems) {
    const items: ItemType[] = JSON.parse(getItems)
    return items
  }
  return []
}

export const getItem = async (id: string): Promise<ItemType | null> => {
  const items: ItemType[] = await getItems()
  const item = items.find(item => item.id === id)
  return item || null
}

export const createItem = async (): Promise<{ id: string }> => {
  const items: ItemType[] = await getItems()

  const id = `${Math.random().toString(36).substring(7)}-${Date.now()}-${Math.random()
    .toString(36)
    .substring(5)}`

  const newItem: ItemType = {
    id,
    title: '',
    editorContent: convertToRaw(EditorState.createEmpty().getCurrentContent()),
  }

  items.push(newItem)
  await store.setItem('items', JSON.stringify(items))

  return { id }
}

export const updateItem = async (id: string, updatedProps: Partial<ItemType>): Promise<void> => {
  const items: ItemType[] = await getItems()
  const index = items.findIndex(item => item.id === id)
  items[index] = { ...items[index], ...updatedProps }
  store.setItem('items', JSON.stringify(items))
}

export const deleteItem = async (id: string): Promise<void> => {
  const items: ItemType[] = await getItems()
  const index = items.findIndex(item => item.id === id)
  items.splice(index, 1)
  store.setItem('items', JSON.stringify(items))
}
