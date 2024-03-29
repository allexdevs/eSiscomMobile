import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/Authentication/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/Products';

// navigators
import TabNavigatorSync from './SyncNavigator';
import CustomerTabNavigator from './CustomerNavigator';
import QueryScreen from '../screens/Customer/QueryScreen';

// providers
import CustomerProvider from '../contexts/customerContext';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <CustomerProvider>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SyncScreen"
          component={TabNavigatorSync}
        />
        <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="QueryScreen" component={QueryScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MainPersonalDataScreen"
          component={CustomerTabNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ProductsScreen"
          component={ProductsScreen}
        />
      </Stack.Navigator>
    </CustomerProvider>
  );
}

export default RootNavigator;
