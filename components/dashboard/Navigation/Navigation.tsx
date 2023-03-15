import Link from 'next/link'

import { IconType } from 'react-icons'
import { IoHomeOutline } from 'react-icons/io5'

type NavLink = {
  title: string
  urlKey: string
  icon: IconType
}

const links: NavLink[] = [
  { title: 'home', urlKey: 'dashboard', icon: IoHomeOutline },
  // { title: 'settings', urlKey: 'settings', icon: IoSettingsOutline },
]

const Navigation = () => {
  return (
    <div className="flex h-screen max-w-fit flex-grow flex-col bg-white shadow-xl lg:max-w-xs">
      <ul className="list-none">
        {links.map(({ title, urlKey, icon }) => {
          const Icon = icon
          return (
            <li
              key={title}
              className="border-b border-b-gray-200 py-3 px-6 text-lg hover:cursor-pointer hover:text-gray-500"
            >
              <Link href={`/${urlKey}`}>
                <div className="flex items-center">
                  <Icon className="mr-3" />
                  <span className="capitalize">{title}</span>
                </div>
              </Link>
            </li>
          )
        })}
        <li className="p-6 py-4 text-gray-500">
          This is a simple text editor. You can create, edit and delete notes.
        </li>
        <li className="p-6 py-4 text-gray-500">
          All the data is saved only in the browser using the IndexedDB.
        </li>
        <li className="p-6 py-4 text-gray-500">Built while playing around with Next.js 13.</li>
        <li className="p-6 py-4 text-blue-400">
          <a href="https://github.com/dstamenkovic/goodday" target="_blank" rel="noreferrer">
            GitHub repository
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
