import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { AuthNavigator } from '~/modules/Auth/routes';
import { PatientNavigator } from '~/modules/Patient/routes';

export const Routes = () => {
  return (
    <NavigationContainer>
      <PatientNavigator />
    </NavigationContainer>
  );
};
