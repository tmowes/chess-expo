import styled, { css } from 'styled-components/native'
import { SquareStyleProps } from './types'

export const Container = styled.View<SquareStyleProps>`
  ${({ isWhite, theme: { colors } }) => css`
    flex: 1;
    background: ${colors.black};
    padding: 4px;
    justify-content: space-between;
    ${isWhite &&
    css`
      background: ${colors.foodWhiteIsh};
    `}
  `}
`

export const RowNumber = styled.Text<SquareStyleProps>`
  ${({ isWhite, isVisible, theme: { colors } }) => css`
    color: ${colors.orange};
    font-weight: bold;
    opacity: 0;

    ${isWhite &&
    css`
      color: ${colors.black};
    `}
    ${isVisible &&
    css`
      opacity: 1;
    `}
  `}
`

export const ColLetter = styled.Text<SquareStyleProps>`
  ${({ isWhite, isVisible, theme: { colors } }) => css`
    color: ${colors.orange};
    align-self: flex-end;
    font-weight: bold;
    opacity: 0;
    ${isWhite &&
    css`
      color: ${colors.black};
    `}
    ${isVisible &&
    css`
      opacity: 1;
    `}
  `}
`
