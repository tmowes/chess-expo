import { Position } from 'chess.js'
import React, { useCallback } from 'react'
import { PanGestureHandler } from 'react-native-gesture-handler'
import {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { toPosition, toTranslation } from '../Notation'
import { PIECES } from './data'
import * as S from './styles'
import { PieceProps } from './types'

const Piece = (props: PieceProps) => {
  const { id, position, chess, onTurn } = props
  const isGestureActive = useSharedValue(false)
  const offsetX = useSharedValue(0)
  const offsetY = useSharedValue(0)
  const translateX = useSharedValue(position.x)
  const translateY = useSharedValue(position.y)

  const movePiece = useCallback(
    (from: Position, to: Position) => {
      const move = chess
        .moves({ verbose: true })
        .find(m => m.from === from && m.to === to)
      const { x, y } = toTranslation(move ? to : from)
      translateX.value = withTiming(x)
      translateY.value = withTiming(y, {}, () => {
        isGestureActive.value = false
      })
      if (move) {
        chess.move(move)
        onTurn()
      }
    },
    [chess, onTurn, isGestureActive, translateX, translateY],
  )

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      isGestureActive.value = true
      offsetX.value = translateX.value
      offsetY.value = translateY.value
    },
    onActive: ({ translationX, translationY }) => {
      translateX.value = translationX + offsetX.value
      translateY.value = translationY + offsetY.value
    },
    onEnd: () => {
      const from = toPosition({ x: offsetX.value, y: offsetY.value })
      const to = toPosition({ x: translateX.value, y: translateY.value })
      runOnJS(movePiece)(from, to)
      isGestureActive.value = false
    },
  })

  const animatedPiece = useAnimatedStyle(() => ({
    zIndex: isGestureActive.value ? 100 : 10,
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }))

  const animatedFrom = useAnimatedStyle(() => ({
    zIndex: isGestureActive.value ? 100 : 10,
    transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
    opacity: isGestureActive.value ? 1 : 0,
  }))

  const animatedTo = useAnimatedStyle(() => {
    const position = toPosition({ x: translateX.value, y: translateY.value })
    const translation = toTranslation(position)

    return {
      zIndex: isGestureActive.value ? 100 : 10,
      transform: [{ translateX: translation.x }, { translateY: translation.y }],
      opacity: isGestureActive.value ? 1 : 0,
    }
  })

  return (
    <>
      <S.ToPosition style={animatedTo} />
      <S.FromPosition style={animatedFrom} />
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <S.Container style={animatedPiece}>
          <S.PieceImg source={PIECES[id]} />
        </S.Container>
      </PanGestureHandler>
    </>
  )
}

export default Piece
