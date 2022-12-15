import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens
import SplashScreen from '../screens/SplashScreen'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'

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
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
    </Stack.Navigator>
  )
}

export default RootNavigator
