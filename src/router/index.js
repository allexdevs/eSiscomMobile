import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import RootNavigator from '../navigation/RootNavigator'

const Router = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default Router
