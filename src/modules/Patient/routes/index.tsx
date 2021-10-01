import React from 'react';
import { DoctorDetailScreen, HomeScreen } from '../screens';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomBar } from '~/components';
import { createStackNavigator } from '@react-navigation/stack';

export type RootBottomParamList = {
  Home: undefined;
};

export type RootStackParamList = {
  Home: undefined;
  DoctorDetail: undefined;
};

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator<RootBottomParamList>();

  return (
    <Tab.Navigator
      tabBar={props => <BottomBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export const PatientNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={BottomNavigator} />
      <Stack.Screen name="DoctorDetail" component={DoctorDetailScreen} />
    </Stack.Navigator>
  );
};
