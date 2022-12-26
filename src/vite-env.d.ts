/// <reference types="vite/client" />
export interface IButton {
  content: string
  active: boolean
  handleClick: () => void
}

export interface ICounter {
  current: number
  total: number
}

// Ojito
export interface IOptions {
  [x: string]: string
  a: string
  b: string
  c: string
}

export interface IOption {
  option: string
  response: string
}

export interface IFinishProps {
  results: number
  total: number
  onClick: () => void
}

export type QuestionProps = IOption & {
  setItemSelected: Dispatch<SetStateAction<string>>
  selected: boolean
}
