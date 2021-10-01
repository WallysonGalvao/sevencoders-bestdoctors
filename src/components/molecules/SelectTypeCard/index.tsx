import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { BaseProps, CardTitle, RegularText } from '~/components';

import { metrics } from '~/styles/metrics';

import * as S from './styles';

export type SelectTypeCardProps = BaseProps & {
  selected?: boolean;
  title: string;
  description: string;
  onPress: () => void;
};

export const SelectTypeCard = ({
  selected = false,
  title,
  description,
  onPress,
  ...props
}: SelectTypeCardProps) => {
  return (
    <S.CardContainer onPress={onPress} selected={selected} {...props}>
      <S.CheckView>
        <S.CheckCircle selected={selected}>
          <Icon name="check-bold" color="white" size={metrics.px(16)} />
        </S.CheckCircle>
      </S.CheckView>
      <S.TextView>
        <CardTitle>{title}</CardTitle>
        <RegularText>{description}</RegularText>
      </S.TextView>
    </S.CardContainer>
  );
};
