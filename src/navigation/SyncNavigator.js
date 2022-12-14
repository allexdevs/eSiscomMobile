import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// screens
import ConnectionScreen from '../screens/ConnectionScreen'
import RequestScreen from '../screens/RequestScreen'

const Tab = createBottomTabNavigator()

const TabNavigatorSync = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Connection') {
            iconName = focused ? 'network' : 'network-outline'
          } else if (route.name === 'Request') {
            iconName = focused
              ? 'database-arrow-down'
              : 'database-arrow-down-outline'
          }

          return <Icon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#faba24',
        tabBarInactiveTintColor: 'dimgrey',
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen
        options={{ headerShown: false, tabBarLabel: 'Conexão' }}
        name="Connection"
        component={ConnectionScreen}
      />
      <Tab.Screen
        options={{ headerShown: false, tabBarLabel: 'Pedido' }}
        name="Request"
        component={RequestScreen}
      />
    </Tab.Navigator>
  )
}

export default TabNavigatorSync
