import Link from 'next/link'

import { IconType } from 'react-icons'
import { IoHomeOutline, IoSettingsOutline } from 'react-icons/io5'

type NavLink = {
  title: string
  urlKey: string
  icon: IconType
}

const links: NavLink[] = [
  { title: 'home', urlKey: 'dashboard', icon: IoHomeOutline },
  { title: 'settings', urlKey: 'settings', icon: IoSettingsOutline },
]

const Navigation = () => {
  return (
    <div className="flex flex-grow flex-col h-screen max-w-xs shadow-xl bg-white">
      <ul className="list-none">
        {links.map(({ title, urlKey, icon }) => {
          const Icon = icon
          return (
            <li
              key={title}
              className="border-b border-b-gray-200 text-lg p-3 hover:text-gray-500 hover:cursor-pointer"
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
      </ul>
    </div>
  )
}

export default Navigation
