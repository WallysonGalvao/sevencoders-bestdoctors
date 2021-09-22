import React from 'react';
import { BaseTextProps } from '~/components';
import { BaseTouchContainer } from '../Container';
import { CardTitle } from '../Text';

type TextLink = BaseTextProps & {
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
