import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// screens
import QueryScreen from '../screens/QueryScreen'

const Tab = createBottomTabNavigator()

const CustomerTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name == 'QueryScreen') {
            iconName = focused ? 'account-search' : 'account-search-outline'
          } else if (route.name == 'MainScreen') {
            iconName = focused
              ? 'card-account-details'
              : 'card-account-details-outline'
          } else if (route.name == 'AddressScreen') {
            iconName = focused
              ? 'map-marker-account'
              : 'map-marker-account-outline'
          } else if (route.name == 'AdditionalScreen') {
            iconName = focused ? 'account-plus' : 'account-plus-outline'
          }

          return <Icon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#faba24',
        tabBarInactiveTintColor: 'dimgrey',
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          marginBottom: 6,
        },
      })}
    >
      <Tab.Screen
        options={{ headerShown: false, tabBarLabel: 'Consulta' }}
        name="QueryScreen"
        component={QueryScreen}
      />
      <Tab.Screen
        options={{ headerShown: false, tabBarLabel: 'Principal' }}
        name="MainScreen"
        component={QueryScreen}
      />
      <Tab.Screen
        options={{ headerShown: false, tabBarLabel: 'Endereço' }}
        name="AddressScreen"
        component={QueryScreen}
      />
      <Tab.Screen
        options={{ headerShown: false, tabBarLabel: 'Adicionais' }}
        name="AdditionalScreen"
        component={QueryScreen}
      />
    </Tab.Navigator>
  )
}

export default CustomerTabNavigator
