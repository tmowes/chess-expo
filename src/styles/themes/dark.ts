import { Dimensions } from 'react-native'

export const { width: sWidth, height: sHeight } = Dimensions.get('screen')

const dark = {
  colors: {
    background: '#2b2735',
    backgroundColor: '#15161E',
    black: '#27242e',
    shape: '#3c3847',
    grayHard: '#6e6359',
    gray: '#9e948a',
    white: '#F4EDE8',
    orange: '#FF5700',
    orangeHover: '#cc4600',
    error: '#c53030',
    inputs: '#211e29',
    transparent: 'transparent',
    foodPrimary: '#FB6E3B',
    foodGrayLight: '#CDCDD2',
    foodBlack: '#02031C',
    foodBackground: '#1E1F20',
    foodGrayDark: '#898C95',
    foodWhiteLighter: '#F5F5F6',
    foodWhiteLight: '#F8F8F9',
    foodWhiteIsh: '#EFEFF1',
    uberMap: '#A0ABFF',
    uberMessage: '#3D5DED',
    uberInput: '#E9E9E9',
    uberTag: '#13AF59',
    carouselBg: '#A5F1FA',
    toasts: {
      info: {
        color: '#3172b7',
        background: '#ebf8ff',
      },
      success: {
        color: '#2e656a',
        background: '#e6fffa',
      },
      error: {
        color: '#c53030',
        background: '#fddede',
      },
      warning: {
        color: '#FF9000',
        background: '#f0f0cd',
      },
    },
  },
  radii: {
    default: '0.8rem',
  },
  screen: {
    width: { sWidth },
    height: { sHeight },
  },
} as const

export default dark
