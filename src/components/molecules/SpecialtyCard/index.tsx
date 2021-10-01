import React from 'react';
import { BaseText } from '~/components/atoms';

import * as S from './styles';

type SpecialtyCardProps = {
  text: string;
  selected?: boolean;
};

export const SpecialtyCard = ({ text, selected }: SpecialtyCardProps) => (
  <S.CardContainer>
    <BaseText
      size={14}
      fontFamily="medium"
      color={selected ? 'primary' : 'greyDark'}>
      {text}
    </BaseText>
  </S.CardContainer>
);
