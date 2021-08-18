import React from 'react';

import * as S from './styles';

export type ButtonProps = {
  text: string;
  outline?: boolean;
};

export const Button = ({ text, outline = false }: ButtonProps) => {
  return (
    <S.ButtonContainer outline={outline}>
      <S.TextButton outline={outline}>{text}</S.TextButton>
    </S.ButtonContainer>
  );
};
