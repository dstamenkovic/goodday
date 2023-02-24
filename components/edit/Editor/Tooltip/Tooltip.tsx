import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsTypeStrikethrough,
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
} from 'react-icons/bs'

type TooltipProps = {
  tooltipRef: React.RefObject<HTMLDivElement>
  showTooltip: boolean
  setShowTooltip?: React.Dispatch<React.SetStateAction<boolean>>
}

const Tooltip = ({ tooltipRef, showTooltip }: TooltipProps) => {
  return (
    <div
      ref={tooltipRef}
      className={`invisible fixed top-0 left-0 flex h-fit w-fit flex-row rounded border border-gray-300 bg-white shadow-sm ${
        showTooltip ? '!visible' : ''
      }`}
    >
      <div className="flex cursor-pointer border-r border-gray-200 p-2" aria-label="Bold">
        <BsTypeBold size={22} />
      </div>
      <div className="flex cursor-pointer border-r border-gray-200 p-2" aria-label="Italic">
        <BsTypeItalic size={22} />
      </div>
      <div className="flex cursor-pointer border-r border-gray-200 p-2" aria-label="Underline">
        <BsTypeUnderline size={22} />
      </div>
      <div className="flex cursor-pointer border-r border-gray-200 p-2" aria-label="Strikethrough">
        <BsTypeStrikethrough size={22} />
      </div>
      <div className="flex cursor-pointer border-r border-gray-200 p-2" aria-label="Heading 1">
        <BsTypeH1 size={22} />
      </div>
      <div className="flex cursor-pointer border-r border-gray-200 p-2" aria-label="Heading 2">
        <BsTypeH2 size={22} />
      </div>
      <div className="flex cursor-pointer p-2" aria-label="Heading 3">
        <BsTypeH3 size={22} />
      </div>
    </div>
  )
}

export default Tooltip
