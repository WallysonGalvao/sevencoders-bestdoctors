import React from 'react';
import { BaseContainer, BaseText } from '~/components/atoms';

import * as S from './styles';

type CategoryCardProps = {
  title: string;
  image: string;
  onPress: () => void;
};

export const CategoryCard = ({ title, image, onPress }: CategoryCardProps) => {
  return (
    <S.CardTouchContainer onPress={onPress}>
      <S.ImageBackground source={{ uri: image }}>
        <BaseContainer
          align="center"
          justify="center"
          bg="darkTransparentLight">
          <BaseText color="white" fontFamily="bold">
            {title}
          </BaseText>
        </BaseContainer>
      </S.ImageBackground>
    </S.CardTouchContainer>
  );
};
