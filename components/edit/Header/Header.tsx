import { useEffect, useState, useRef } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import Link from 'next/link'

type Props = {
  handleSave: ({ title }: { title: string }) => void
  defaultTitle?: string
}

const Header = ({ handleSave, defaultTitle }: Props) => {
  const [inputVal, setInputVal] = useState<string>('')
  const [inputActived, setInputActived] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (defaultTitle) setInputVal(defaultTitle)
  }, [defaultTitle])

  useEffect(() => {
    if (!inputActived) return

    const timeout = setTimeout(() => {
      handleSave({ title: inputVal })
    }, 1000)

    return () => clearTimeout(timeout)
  }, [inputVal, handleSave, inputActived])

  return (
    <div className="flex flex-row place-items-center justify-start gap-6 pb-4">
      <Link href="/dashboard">
        <IoChevronBackOutline size={28} />
      </Link>
      <input
        ref={inputRef}
        type="text"
        name="Title"
        aria-label="Title"
        placeholder="Add title..."
        className="w-full text-3xl outline-none"
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
        onFocus={() => setInputActived(true)}
      />
    </div>
  )
}

export default Header
