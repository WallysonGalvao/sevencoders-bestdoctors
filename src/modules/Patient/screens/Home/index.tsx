import React from 'react';
import {
  BaseBackground,
  Title,
  TextOpen,
  Avatar,
  CardTitle,
  SpecialtiesList,
  DoctorsList,
} from '~/components';

import * as S from './styles';

export const HomeScreen = () => {
  return (
    <BaseBackground>
      <S.HeaderContainer>
        <S.HeaderTextContainer>
          <Title>Olá, Pedro!</Title>
          <TextOpen>Brasília, DF</TextOpen>
        </S.HeaderTextContainer>
        <S.HeaderImageContainer>
          <Avatar
            source={{
              uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            }}
          />
        </S.HeaderImageContainer>
      </S.HeaderContainer>

      <CardTitle ml={24} mt={32}>
        MÉDICOS PRÓXIMOS
      </CardTitle>

      <SpecialtiesList />

      <DoctorsList />
    </BaseBackground>
  );
};
