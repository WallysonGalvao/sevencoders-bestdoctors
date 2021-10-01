import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  LoginScreen,
  SplashScreen,
  CreateAccountScreen,
  SelectTypeCardScreen,
  ConfirmPhoneScreen,
  CreateAccountSuccessScreen,
} from '../screens';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  CreateAccount: undefined;
  SelectAccount: undefined;
  ConfirmPhone: undefined;
  CreateAccountSuccess: undefined;
};

export const AuthNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="SelectAccount" component={SelectTypeCardScreen} />
      <Stack.Screen name="ConfirmPhone" component={ConfirmPhoneScreen} />
      <Stack.Screen
        name="CreateAccountSuccess"
        component={CreateAccountSuccessScreen}
      />
    </Stack.Navigator>
  );
};
