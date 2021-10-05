import React from 'react';
import { BaseProps } from '~/components';
import { BaseTouchContainer } from '../Container';
import { CardTitle } from '../Text';

type TextLink = BaseProps & {
  text: string;
  onPress?: () => void;
};

export const TextLink = ({ text, onPress, ...props }: TextLink) => (
  <BaseTouchContainer
    h={24}
    align="flex-end"
    justify="flex-end"
    onPress={onPress}
    {...props}>
    <CardTitle>{text}</CardTitle>
  </BaseTouchContainer>
);
