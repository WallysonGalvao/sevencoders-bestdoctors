import React from 'react';
import { BaseProps } from '../Container';

import * as S from './styles';

type BGTypes = 'primary' | 'danger' | 'background';
type BCType = 'white' | 'danger';
type TCType = BCType;

const kinds = {
  primary: {
    bg: 'primary',
    bc: 'primary',
    tc: 'white',
  },
  danger: {
    bg: 'danger',
    bc: 'danger',
    tc: 'white',
  },
  'outline-danger': {
    bg: 'background',
    bc: 'danger',
    tc: 'danger',
  },
};

export type ButtonProps = BaseProps & {
  children: string;
  outline?: boolean;
  onPress?: () => void;
  floating?: boolean;
  kind?: keyof typeof kinds;
};

export const Button = ({
  children,
  onPress,
  outline = false,
  floating = false,
  kind,
  ...props
}: ButtonProps) => {
  return (
    <S.ButtonContainer
      floating={floating}
      onPress={onPress}
      outline={outline}
      bg={(kind ? kinds[kind].bg : kinds.primary.bg) as BGTypes}
      bc={(kind ? kinds[kind].bc : kinds.primary.bc) as BCType}
      {...props}>
      <S.TextButton
        color={(kind ? kinds[kind].tc : kinds.primary.tc) as TCType}>
        {children}
      </S.TextButton>
    </S.ButtonContainer>
  );
};
