type TooltipProps = {
  tooltipRef: React.RefObject<HTMLDivElement>
  showTooltip: boolean
  setShowTooltip?: React.Dispatch<React.SetStateAction<boolean>>
}

const Tooltip = ({ tooltipRef, showTooltip }: TooltipProps) => {
  return (
    <div
      ref={tooltipRef}
      className={`invisible fixed top-0 left-0 h-10 w-28 bg-neutral-500 p-1 ${
        showTooltip ? '!visible' : ''
      }`}
    >
      this is tooltip
    </div>
  )
}

export default Tooltip
