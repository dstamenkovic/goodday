import { IoCreateOutline, IoTrashOutline } from 'react-icons/io5'
import Link from 'next/link'

import { ItemType } from 'types'

type ItemProps = { item: ItemType; deleteHandler: (id: string) => Promise<void> }

const DashboardItem = ({ item, deleteHandler }: ItemProps) => {
  return (
    <div className="item group">
      <button
        className="invisible absolute top-2 right-2 cursor-pointer group-hover:visible"
        onClick={() => deleteHandler(item.id)}
        aria-label="Delete"
      >
        <IoTrashOutline size={27} className="stroke-red-500" />
      </button>
      <h3 className="w-full truncate pb-4">{item.title || 'No title'}</h3>
      <Link href={`/edit?id=${item.id}`}>
        <IoCreateOutline size={33} title="Edit" />
      </Link>
    </div>
  )
}

export default DashboardItem
