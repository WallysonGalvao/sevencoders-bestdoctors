import React from 'react';
import { BaseText } from '~/components/atoms';
import * as S from './styles';

type TimeCardProps = {
  time: string;
  selected?: boolean;
};

export const TimeCard = ({ time, selected }: TimeCardProps) => (
  <S.TimeCardContainer selected={selected}>
    <BaseText
      size={14}
      fontFamily={selected ? 'bold' : 'medium'}
      color={selected ? 'primary' : 'greyDark'}>
      {time}
    </BaseText>
  </S.TimeCardContainer>
);
