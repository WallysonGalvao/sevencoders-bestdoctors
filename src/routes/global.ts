/* eslint-disable @typescript-eslint/no-unused-vars */

import { RootStackParamList as AuthRoutes } from '~/modules/Auth/routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthRoutes {}
  }
}
