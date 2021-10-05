import React from 'react';
import { BaseContainer } from '~/components/atoms';
import { AppointmentCard } from '~/components/molecules';

import { HISTORIC_MOCK } from './settings';

import * as S from './styles';

export const HistoricList = () => (
  <S.List
    data={HISTORIC_MOCK}
    renderItem={({ item }) => <AppointmentCard appointment={item} />}
    keyExtractor={item => item.id}
    ItemSeparatorComponent={() => <BaseContainer h={16} />}
  />
);
