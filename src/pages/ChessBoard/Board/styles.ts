import { Dimensions } from 'react-native'
import styled, { css } from 'styled-components/native'

const { width } = Dimensions.get('window')

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    justify-content: center;
    width: ${width}px;
    height: ${width}px;
    background: white;
  `}
`

export const Title = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
  `}
`
