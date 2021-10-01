import React from 'react';
import { BaseContainer } from '~/components/atoms';
import { DoctorCard } from '~/components/molecules';

import { MOCK_DATA } from './settings';

import * as S from './styles';

export const DoctorsList = () => (
  <S.List
    data={MOCK_DATA}
    renderItem={({ item }) => <DoctorCard doctor={item} />}
    keyExtractor={item => item.id}
    ItemSeparatorComponent={() => <BaseContainer h={16} />}
  />
);
