import React from 'react'
import Board from './Board'
import { PIECES } from './Piece/data'

import * as S from './styles'

export const assets = Object.values(PIECES)

const ChessBoard: React.FC = () => {
  return (
    <S.Container>
      <Board />
    </S.Container>
  )
}

export default ChessBoard
