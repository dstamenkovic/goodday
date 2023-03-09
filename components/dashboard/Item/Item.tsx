import { IoCreateOutline } from 'react-icons/io5'
import Link from 'next/link'

import { ItemType } from 'types'

type ItemProps = { item: ItemType }

const DashboardItem = ({ item }: ItemProps) => {
  return (
    <Link href={`/edit?id=${item.id}`} className="item">
      <h3 className="mb-6">{item.title || 'No title'}</h3>
      <IoCreateOutline size={30} title="Edit" />
    </Link>
  )
}

export default DashboardItem
