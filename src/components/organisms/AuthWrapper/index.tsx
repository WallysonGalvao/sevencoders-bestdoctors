import React from 'react';
import { Title } from '~/components/atoms';

import background from '~/assets/img/auth_background.png';

import * as S from './styles';

type AuthWrapperProps = {
  children: React.ReactNode;
  title: string;
  bottomChildren: React.ReactNode;
};

export const AuthWrapper = ({
  children,
  title,
  bottomChildren,
}: AuthWrapperProps) => {
  return (
    <S.Container source={background}>
      <S.ContentContainer>
        {title && (
          <Title w="100%" mb={48}>
            {title}
          </Title>
        )}
        {children}
      </S.ContentContainer>
      <S.ButtonContainer>{bottomChildren}</S.ButtonContainer>
    </S.Container>
  );
};
