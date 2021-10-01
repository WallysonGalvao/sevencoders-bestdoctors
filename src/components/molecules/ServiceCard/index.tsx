import React from 'react';
import { BaseText, RegularText } from '~/components/atoms';

import * as S from './styles';

type ServiceCardProps = {
  service: {
    title: string;
    price: string;
    description: string;
  };
  selected: boolean;
};

export const ServiceCard = ({ service, selected }: ServiceCardProps) => {
  const { title, price, description } = service;
  return (
    <S.ServiceCardContainer selected={selected}>
      <S.TitleContainer>
        <BaseText
          mr={36}
          fontFamily={selected ? 'semiBold' : 'medium'}
          color={selected ? 'primary' : 'greyDark'}>
          {title}
        </BaseText>
        <BaseText
          fontFamily={selected ? 'semiBold' : 'medium'}
          color={selected ? 'primary' : 'greyDark'}>
          {price}
        </BaseText>
      </S.TitleContainer>
      <RegularText mt={6}>{description}</RegularText>
    </S.ServiceCardContainer>
  );
};
