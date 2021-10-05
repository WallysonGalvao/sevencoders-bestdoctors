import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';

import { BaseBackground, Title, GoBackButton, DoctorsList } from '~/components';
import { RootStackParamList } from '../../routes';

type CategoryDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'CategoryDetail'
>;

export const CategoryDetail = () => {
  const { params } = useRoute<CategoryDetailScreenRouteProp>();
  const { title } = params;
  return (
    <BaseBackground pr={24} pl={24}>
      <GoBackButton />
      <Title mb={24}>{title}</Title>
      <DoctorsList />
    </BaseBackground>
  );
};
