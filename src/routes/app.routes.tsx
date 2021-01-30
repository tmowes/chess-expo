import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import * as P from '../pages'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes: React.FC = () => (
  <>
    {/* <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
    /> */}
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#15161E' },
      }}
    >
      <Screen name="CarouselAdvanced" component={P.ChessBoard} />
      <Screen name="Home" component={P.Home} />
    </Navigator>
  </>
)

export default AppRoutes
