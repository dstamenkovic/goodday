import { EditorState, convertToRaw, RawDraftContentState } from 'draft-js'
import localforage from 'localforage'

export interface ItemType {
  id: string
  title: string
  editorContent: RawDraftContentState
}

interface State {
  items: ItemType[]
}

let store: LocalForage = localforage.createInstance({
  name: 'doamm',
})

// export const initialState: State = {
//   items: [
//     {
//       id: '1',
//       title: 'Item 1',
//       editorState: EditorState.createWithContent(
//         ContentState.createFromText('Here is just one example')
//       ),
//     },
//   ],
// }

// export const initStorage = async (): Promise<void> => {
//   const items: State['items'] | null = await store.getItem('items')
//   if (!items) {
//     store.setItem('items', JSON.stringify(initialState.items))
//   }
// }

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

// type ErrorMsg = string | null

// export const isInvalidItem = (item: ItemType): ErrorMsg => {
//   //
// }
