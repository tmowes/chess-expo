import Animated from 'react-native-reanimated'
import styled, { css } from 'styled-components/native'
import { SIZE } from '../Notation'

export const FromPosition = styled(Animated.View)`
  ${({ theme: { colors } }) => css`
    background: ${`${colors.orange}60`};
    position: absolute;
    top: 0;
    width: ${SIZE}px;
    height: ${SIZE}px;
  `}
`
export const ToPosition = styled(Animated.View)`
  ${({ theme: { colors } }) => css`
    background: ${`${colors.orange}ee`};
    position: absolute;
    top: 0;
    width: ${SIZE}px;
    height: ${SIZE}px;
  `}
`

export const Container = styled(Animated.View)`
  position: absolute;
  top: 0;
  width: ${SIZE}px;
  height: ${SIZE}px;
`

export const Title = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
  `}
`

export const PieceImg = styled.Image`
  width: ${SIZE}px;
  height: ${SIZE}px;
`
