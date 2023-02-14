import { IoAddOutline } from 'react-icons/io5'
import Link from 'next/link'

const Create = () => {
  return (
    <Link href="/edit" className="item justify-center">
      <IoAddOutline size={45} title="Create" />
    </Link>
  )
}

export default Create
