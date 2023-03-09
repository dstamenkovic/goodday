import { DraftBlockType, DraftInlineStyle } from 'draft-js'

import {
  blockStylesBtns,
  inlineStylesBtns,
  AllowedStyles,
  AllowedInlineStyles,
  AllowedBlockStyles,
} from './tooltipUtils'

type TooltipProps = {
  tooltipRef: React.RefObject<HTMLDivElement>
  showTooltip: boolean
  setShowTooltip: React.Dispatch<React.SetStateAction<boolean>>
  applyStyles: (style: AllowedStyles) => void
  currentStyle: AllowedInlineStyles[]
  // currentStyle: DraftInlineStyle
  // currentBlockType: AllowedBlockStyles | 'unstyled
  currentBlockType: DraftBlockType
}

const Tooltip = ({
  tooltipRef,
  showTooltip,
  applyStyles,
  setShowTooltip,
  currentStyle,
  currentBlockType,
}: TooltipProps) => {
  const onClickHandler = (style: AllowedStyles) => {
    applyStyles(style)
    setShowTooltip(false)
  }

  return (
    <div
      ref={tooltipRef}
      data-testid="tooltip"
      className={`invisible fixed top-0 left-0 z-10 flex h-fit w-fit flex-row rounded border border-gray-300 bg-white shadow-sm ${
        showTooltip ? '!visible' : ''
      }`}
    >
      {inlineStylesBtns.map(btn => {
        return (
          <div
            className="flex cursor-pointer border-r border-gray-200 p-2"
            aria-label={btn.label}
            onClick={() => onClickHandler(btn.name)}
            key={btn.name}
          >
            {btn.icon({
              size: 22,
              className: `${currentStyle.includes(btn.name) ? 'fill-blue-500' : ''}`,
            })}
          </div>
        )
      })}

      {blockStylesBtns.map(btn => {
        return (
          <div
            className={btn.styles}
            aria-label={btn.label}
            onClick={() => onClickHandler(btn.name)}
            key={btn.name}
          >
            {btn.icon({
              size: 22,
              className: `${currentBlockType === btn.name ? 'fill-blue-500' : ''}`,
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Tooltip
