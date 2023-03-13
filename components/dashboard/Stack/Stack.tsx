import Item from '../Item'
import Create from '../Create'

import { ItemType } from 'types'

type StackProps = {
  items: ItemType[]
  onCreate: () => Promise<void>
  onDelete: (id: string) => Promise<void>
}

const Stack = ({ items, onCreate, onDelete }: StackProps) => {
  return (
    <>
      <div
        className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 2xl:gap-5 "
        data-testid="dashboard-items"
      >
        <Create onClickHandler={onCreate} />
        {items.map(item => (
          <Item key={item.id} item={item} deleteHandler={onDelete} />
        ))}
      </div>
    </>
  )
}

export default Stack
