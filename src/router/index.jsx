import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// navigators
import RootNavigator from '../navigation/RootNavigator';

function Router() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default Router;
