import React from 'react';
import {
  CategoryDetail,
  DoctorDetailScreen,
  HistoryDetail,
  HistoryScreen,
  HomeScreen,
  ProfileScreen,
  SearchScreen,
} from '../screens';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomBar } from '~/components';
import { createStackNavigator } from '@react-navigation/stack';

export type RootBottomParamList = {
  Home: undefined;
  Search: undefined;
  History: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  BottomNavigator: undefined;
  DoctorDetail: undefined;
  CategoryDetail: { title: string };
  HistoryDetail: undefined;
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
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
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
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      <Stack.Screen name="DoctorDetail" component={DoctorDetailScreen} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
      <Stack.Screen name="HistoryDetail" component={HistoryDetail} />
    </Stack.Navigator>
  );
};
