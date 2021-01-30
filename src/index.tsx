import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import styled, { css, ThemeProvider } from 'styled-components/native'
import * as themes from './styles/themes'
import Routes from './routes'

const AppWrapper = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background: ${colors.backgroundColor};
  `}
`

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <NavigationContainer>
        <AppWrapper>
          <Routes />
        </AppWrapper>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
