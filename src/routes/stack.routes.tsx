import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '@screens/Welcome';
import { SignIn } from '@screens/SignIn';
import { Home } from '@screens/Home';
import { Plant } from '@screens/Plant';

const { Navigator, Screen } = createNativeStackNavigator();


export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='welcome'
        component={Welcome}
      />
      <Screen
        name='signIn'
        component={SignIn}
      />
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='plant'
        component={Plant}
      />
    </Navigator>
  )
}
