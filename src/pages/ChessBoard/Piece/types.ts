import { Chess } from 'chess.js'
import { Vector } from 'react-native-redash'

export type PieceProps = {
  id: Piece
  position: Vector
  chess: Chess
  onTurn: () => void
  enabled: boolean
}

export type Player = 'b' | 'w'
type Type = 'q' | 'r' | 'n' | 'b' | 'k' | 'p'
type Piece = `${Player}${Type}`
export type Pieces = Record<Piece, ReturnType<typeof require>>
