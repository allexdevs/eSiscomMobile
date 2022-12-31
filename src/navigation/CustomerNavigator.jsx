import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// screens
import MainScreen from '../screens/Customer/MainScreen';
import AddressScreen from '../screens/Customer/AddressScreen';
import AdditionalScreen from '../screens/Customer/AdditionalScreen';

// providers
import CustomerProvider from '../contexts/customerContext';

const Tab = createBottomTabNavigator();

const CustomerTabNavigator = () => {
  return (
    <CustomerProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == 'MainScreen') {
              iconName = focused ? 'card-account-details' : 'card-account-details-outline';
            } else if (route.name == 'AddressScreen') {
              iconName = focused ? 'map-marker-account' : 'map-marker-account-outline';
            } else if (route.name == 'AdditionalScreen') {
              iconName = focused ? 'account-plus' : 'account-plus-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
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
          options={{ headerShown: false, tabBarLabel: 'Principal' }}
          name="MainScreen"
          component={MainScreen}
        />
        <Tab.Screen
          options={{ headerShown: false, tabBarLabel: 'Endereço' }}
          name="AddressScreen"
          component={AddressScreen}
        />
        <Tab.Screen
          options={{ headerShown: false, tabBarLabel: 'Adicionais' }}
          name="AdditionalScreen"
          component={AdditionalScreen}
        />
      </Tab.Navigator>
    </CustomerProvider>
  );
};

export default CustomerTabNavigator;
