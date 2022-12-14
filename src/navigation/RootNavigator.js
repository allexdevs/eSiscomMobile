import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens
import SplashScreen from '../screens/SplashScreen'
import LoginScreen from '../screens/LoginScreen'

// navigators
import TabNavigatorSync from '../navigation/SyncNavigator'

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SyncScreen"
        component={TabNavigatorSync}
      />
    </Stack.Navigator>
  )
}

export default RootNavigator
