import { IoCreateOutline } from 'react-icons/io5'

export type ItemType = {
  id: string
  title: string
}
type ItemProps = { item: ItemType }

const DashboardItem = ({ item }: ItemProps) => {
  return (
    <div className="item">
      <h3 className="mb-6">{item.title}</h3>
      <IoCreateOutline size={30} title="Edit" />
    </div>
  )
}

export default DashboardItem
