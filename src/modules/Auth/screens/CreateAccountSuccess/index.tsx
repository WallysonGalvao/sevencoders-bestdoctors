import React from 'react';

import { AuthWrapper, Title, Button } from '~/components';

import checkImage from '~/assets/img/testsada.png';

import * as S from './styles';

export const CreateAccountSuccessScreen = () => {
  return (
    <AuthWrapper bottomChildren={<Button>ACESSAR O APP</Button>}>
      <S.Container>
        <S.SuccessImg source={checkImage} />
        <Title align="center" mt={16}>
          Conta criada com sucesso!
        </Title>
      </S.Container>
    </AuthWrapper>
  );
};
