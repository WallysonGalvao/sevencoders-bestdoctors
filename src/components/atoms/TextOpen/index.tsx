import React from 'react';
import { BaseText } from '../Text';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~/styles/colors';

import * as S from './styles';

type TextOpenProps = {
  children: React.ReactNode;
};

export const TextOpen = ({ children }: TextOpenProps) => (
  <S.MainContainer>
    <BaseText fontFamily="medium" size={14}>
      {children}
    </BaseText>
    <Icon name="chevron-down-outline" size={16} color={colors.primary} />
  </S.MainContainer>
);
