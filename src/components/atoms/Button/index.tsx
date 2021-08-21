import React from 'react';
import { BaseProps } from '../Container';

import * as S from './styles';

export type ButtonProps = BaseProps & {
  children: string;
  outline?: boolean;
  onPress?: () => void;
};

export const Button = ({
  children,
  outline = false,
  ...props
}: ButtonProps) => {
  return (
    <S.ButtonContainer outline={outline} {...props}>
      <S.TextButton outline={outline}>{children}</S.TextButton>
    </S.ButtonContainer>
  );
};
