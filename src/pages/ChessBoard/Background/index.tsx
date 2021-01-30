import React from 'react'
import Row from './Row'

import * as S from './styles'

const Background: React.FC = () => {
  return (
    <S.Container>
      {new Array(8).fill(0).map((_, row) => (
        <Row key={`row-${row}`} row={row} />
      ))}
    </S.Container>
  )
}

export default Background
