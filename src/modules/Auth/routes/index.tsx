import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen, SplashScreen } from '../screens';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};

export const AuthNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
