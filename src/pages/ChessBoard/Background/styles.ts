import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
  `}
`

export const Title = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
  `}
`
