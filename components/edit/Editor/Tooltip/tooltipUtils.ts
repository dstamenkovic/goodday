import { IconType } from 'react-icons'
import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsTypeStrikethrough,
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
} from 'react-icons/bs'

export type AllowedInlineStyles = 'BOLD' | 'ITALIC' | 'UNDERLINE' | 'STRIKETHROUGH'
export type AllowedBlockStyles = 'header-one' | 'header-two' | 'header-three'
export type AllowedStyles = AllowedInlineStyles | AllowedBlockStyles

type InlineStyleBtnType = {
  name: AllowedInlineStyles
  label: string
  icon: IconType
}

export const inlineStylesBtns: InlineStyleBtnType[] = [
  {
    name: 'BOLD',
    label: 'Bold',
    icon: BsTypeBold,
  },
  {
    name: 'ITALIC',
    label: 'Italic',
    icon: BsTypeItalic,
  },
  {
    name: 'UNDERLINE',
    label: 'Underline',
    icon: BsTypeUnderline,
  },
  {
    name: 'STRIKETHROUGH',
    label: 'Strikethrough',
    icon: BsTypeStrikethrough,
  },
]

type BlockStyleBtnType = {
  name: AllowedBlockStyles
  label: string
  icon: IconType
  styles: string
}

export const blockStylesBtns: BlockStyleBtnType[] = [
  {
    name: 'header-one',
    label: 'Header One',
    icon: BsTypeH1,
    styles: 'flex cursor-pointer border-r border-gray-200 p-2',
  },
  {
    name: 'header-two',
    label: 'Header Two',
    icon: BsTypeH2,
    styles: 'flex cursor-pointer border-r border-gray-200 p-2',
  },
  {
    name: 'header-three',
    label: 'Header Three',
    icon: BsTypeH3,
    styles: 'flex cursor-pointer p-2',
  },
]
