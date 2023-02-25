import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsTypeStrikethrough,
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
} from 'react-icons/bs'

import { AllowedStyles } from '../Editor'

type TooltipProps = {
  tooltipRef: React.RefObject<HTMLDivElement>
  showTooltip: boolean
  setShowTooltip: React.Dispatch<React.SetStateAction<boolean>>
  applyStyles: (style: AllowedStyles) => void
}

const Tooltip = ({ tooltipRef, showTooltip, applyStyles, setShowTooltip }: TooltipProps) => {
  const onClickHandler = (style: AllowedStyles) => {
    applyStyles(style)
    setShowTooltip(false)
  }

  return (
    <div
      ref={tooltipRef}
      className={`invisible fixed top-0 left-0 z-10 flex h-fit w-fit flex-row rounded border border-gray-300 bg-white shadow-sm ${
        showTooltip ? '!visible' : ''
      }`}
    >
      <div
        className="flex cursor-pointer border-r border-gray-200 p-2"
        aria-label="Bold"
        onClick={() => onClickHandler('BOLD')}
      >
        <BsTypeBold size={22} />
      </div>
      <div
        className="flex cursor-pointer border-r border-gray-200 p-2"
        aria-label="Italic"
        onClick={() => onClickHandler('ITALIC')}
      >
        <BsTypeItalic size={22} />
      </div>
      <div
        className="flex cursor-pointer border-r border-gray-200 p-2"
        aria-label="Underline"
        onClick={() => onClickHandler('UNDERLINE')}
      >
        <BsTypeUnderline size={22} />
      </div>
      <div
        className="flex cursor-pointer border-r border-gray-200 p-2"
        aria-label="Strikethrough"
        onClick={() => onClickHandler('STRIKETHROUGH')}
      >
        <BsTypeStrikethrough size={22} />
      </div>
      <div
        className="flex cursor-pointer border-r border-gray-200 p-2"
        aria-label="Heading 1"
        onClick={() => onClickHandler('header-one')}
      >
        <BsTypeH1 size={22} />
      </div>
      <div
        className="flex cursor-pointer border-r border-gray-200 p-2"
        aria-label="Heading 2"
        onClick={() => onClickHandler('header-two')}
      >
        <BsTypeH2 size={22} />
      </div>
      <div
        className="flex cursor-pointer p-2"
        aria-label="Heading 3"
        onClick={() => onClickHandler('header-three')}
      >
        <BsTypeH3 size={22} />
      </div>
    </div>
  )
}

export default Tooltip
