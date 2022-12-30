/// <reference types="vite/client" />
// Interfaces
export interface IButton {
  content: string
  active: boolean
  handleClick: () => void
  theme: string
}

export interface ICounter {
  current: number
  total: number
  theme: string
}

export interface IOptions {
  [x: string]: string
}

export interface IOption {
  option: string
  response: string
}

export interface IQuestion {
  question: string
  options: IOptions
  correctAnswer: string
}

export interface IFinishProps {
  results: number
  total: number
  onClick: () => void
  theme: string
}

export interface ITheme {
  name: string
  colors: string[]
}

// Props
export type OptionProps = IOption & {
  setItemSelected: Dispatch<SetStateAction<string>>
  selected: boolean
  theme: string
}

export type ThemeHandleProps = {
  visible: boolean
  handleClick: Dispatch<SetStateAction<boolean>>
  handleTheme: Dispatch<SetStateAction<string>>
}

export interface IThemeProps extends ITheme {
  handleTheme: Dispatch<SetStateAction<string>>
}

export type OptionContainerProps = {
  options: IOptions
  theme: string
  setItemSelected: Dispatch<SetStateAction<string>>
  itemSelected: string
}
