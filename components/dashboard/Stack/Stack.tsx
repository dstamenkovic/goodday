import Item, { ItemType } from '../Item'
import Create from '../Create'

type StackProps = {
  items: ItemType[]
  onCreate: () => Promise<void>
}

const Stack = ({ items, onCreate }: StackProps) => {
  return (
    <>
      <div
        className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 2xl:gap-5 "
        data-testid="dashboard-items"
      >
        <Create onClickHandler={onCreate} />
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

export default Stack
