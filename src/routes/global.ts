/* eslint-disable @typescript-eslint/no-unused-vars */

import { RootStackParamList as AuthStackRoutes } from '~/modules/Auth/routes';
import {
  RootBottomParamList as PatientBottomRoutes,
  RootStackParamList as PatientStackRoutes,
} from '~/modules/Patient/routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthStackRoutes,
        PatientBottomRoutes,
        PatientStackRoutes {}
  }
}
