import { RowProps } from '../types'

export interface SquareProps extends RowProps {
  col: number
}

export type SquareStyleProps = {
  isWhite: boolean
  isVisible?: boolean
}
