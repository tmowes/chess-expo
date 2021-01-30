import React from 'react'
import Square from './Square'

import * as S from './styles'
import { RowProps } from './types'

const Row = ({ row }: RowProps) => {
  return (
    <S.Container>
      {new Array(8).fill(0).map((_, col) => (
        <Square key={`col-${col}`} row={row} col={col} />
      ))}
    </S.Container>
  )
}

export default Row
