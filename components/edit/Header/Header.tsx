import { IoChevronBackOutline } from 'react-icons/io5'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex flex-row place-items-center justify-start gap-6 pb-4">
      <Link href="/dashboard">
        <IoChevronBackOutline size={28} />
      </Link>
      {/* <h2 className="text-lg">Create New Text</h2> */}
      <input
        type="text"
        name="Title"
        aria-label="Title"
        placeholder="Add title..."
        className="w-full text-3xl outline-none"
      />
    </div>
  )
}

export default Header
