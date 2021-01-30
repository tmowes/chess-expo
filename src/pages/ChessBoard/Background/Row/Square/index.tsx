import React, { useMemo } from 'react'

import * as S from './styles'
import { SquareProps } from './types'

const Square = ({ row, col }: SquareProps) => {
  const isWhite = (row + col) % 2 === 0
  const rowVisible = col === 0
  const colVisible = row === 7

  const rowFixed = useMemo(() => {
    return 8 - row
  }, [row])

  const colFixed = useMemo(() => {
    return String.fromCharCode('a'.charCodeAt(0) + col)
  }, [col])

  return (
    <S.Container isWhite={isWhite}>
      <S.RowNumber isWhite={isWhite} isVisible={rowVisible}>
        {rowFixed}
      </S.RowNumber>
      <S.ColLetter isWhite={isWhite} isVisible={colVisible}>
        {colFixed}
      </S.ColLetter>
    </S.Container>
  )
}

export default Square
