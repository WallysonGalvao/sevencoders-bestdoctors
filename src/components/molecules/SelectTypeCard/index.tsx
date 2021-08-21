import React from 'react';
import { CardTitle, RegularText } from '~/components';

import * as S from './styles';

export type SelectTypeCardProps = {
  selected?: boolean;
  title: string;
  description: string;
};

export const SelectTypeCard = ({
  selected = false,
  title,
  description,
}: SelectTypeCardProps) => {
  return (
    <S.CardContainer selected={selected}>
      <S.CheckView>
        <S.CheckCircle selected={selected} />
      </S.CheckView>
      <S.TextView>
        <CardTitle>{title}</CardTitle>
        <RegularText>{description}</RegularText>
      </S.TextView>
    </S.CardContainer>
  );
};
