import { Chess } from 'chess.js'
import React, { useCallback, useState } from 'react'
import { useConst } from '../../../components'
import Background from '../Background'
import { SIZE } from '../Notation'
import Piece from '../Piece'

import * as S from './styles'

const Board: React.FC = () => {
  const chess = useConst(() => new Chess())
  const [state, setState] = useState({
    player: 'w',
    board: chess.board(),
  })
  const onTurn = useCallback(() => {
    setState({
      player: state.player === 'w' ? 'b' : 'w',
      board: chess.board(),
    })
  }, [chess, state.player])

  return (
    <S.Container>
      <Background />
      {state.board.map((row, y) =>
        row.map((piece, x) => {
          if (piece !== null) {
            return (
              <Piece
                key={`${x}-${y}`}
                id={`${piece.color}${piece.type}` as const}
                position={{ x: x * SIZE, y: y * SIZE }}
                // startPosition={{ x, y }}
                chess={chess}
                onTurn={onTurn}
                enabled={state.player === piece.color}
              />
            )
          }
          return null
        }),
      )}
    </S.Container>
  )
}

export default Board
