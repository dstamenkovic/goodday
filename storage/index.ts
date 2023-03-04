import { EditorState, ContentState } from 'draft-js'
import localforage from 'localforage'

interface ItemType {
  id: string
  title: string
  editorState: EditorState
}

interface State {
  items: ItemType[]
}

let store: LocalForage = localforage.createInstance({
  name: 'doamm',
})

export const initialState: State = {
  items: [
    {
      id: '1',
      title: 'Item 1',
      editorState: EditorState.createWithContent(
        ContentState.createFromText('Here is just one example')
      ),
    },
  ],
}

export const initStorage = async (): Promise<void> => {
  const items: State['items'] | null = await store.getItem('items')
  if (!items) {
    store.setItem('items', JSON.stringify(initialState.items))
  }
}

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

export const addItem = async (item: ItemType): Promise<void> => {
  const items: ItemType[] = await getItems()
  items.push(item)
  store.setItem('items', JSON.stringify(items))
}

export const updateItem = async (updatedItem: ItemType): Promise<void> => {
  const items: ItemType[] = await getItems()
  const index = items.findIndex(item => item.id === updatedItem.id)
  items[index] = updatedItem
  store.setItem('items', JSON.stringify(items))
}

export const deleteItem = async (id: string): Promise<void> => {
  const items: ItemType[] = await getItems()
  const index = items.findIndex(item => item.id === id)
  items.splice(index, 1)
  store.setItem('items', JSON.stringify(items))
}

// type ErrorMsg = string | null

// export const isInvalidItem = (item: ItemType): ErrorMsg => {
//   //
// }
