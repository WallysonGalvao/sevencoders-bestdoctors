import React from 'react';
import { SpecialtyCard } from '~/components';

import * as S from './styles';

export type MockDataType = {
  id: string;
  title: string;
};

const MOCKDATA: MockDataType[] = [
  {
    id: '1',
    title: 'Cardiologista',
  },
  {
    id: '2',
    title: 'Nutricionista',
  },
  {
    id: '3',
    title: 'Dentista',
  },
  {
    id: '4',
    title: 'Pediatra',
  },
  {
    id: '5',
    title: 'Geriatra',
  },
  {
    id: '6',
    title: 'Ginecologista',
  },
  {
    id: '7',
    title: 'Otorrino',
  },
  {
    id: '8',
    title: 'Otorpedista',
  },
  {
    id: '9',
    title: 'Urologista',
  },
];

export const SpecialtiesList = () => (
  <S.List
    horizontal
    data={MOCKDATA}
    renderItem={({ item }) => <SpecialtyCard text={item.title} />}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
  />
);
