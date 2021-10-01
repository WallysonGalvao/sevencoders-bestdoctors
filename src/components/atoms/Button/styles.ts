import styled, { css } from 'styled-components/native';

import { ButtonProps } from '.';
import { BaseTouchContainer } from '../Container';

import { theme as th } from '~/styles/theme';

type ButtonContainerStyledProps = Pick<ButtonProps, 'floating' | 'outline'> & {
  bg: keyof typeof th.colors;
  bc: keyof typeof th.colors;
};

type TextButtonStyledProps = {
  color: keyof typeof th.colors;
};

export const ButtonContainer = styled(
  BaseTouchContainer,
)<ButtonContainerStyledProps>`
  ${({ theme, floating, outline, bg }) => css`
    width: ${theme.metrics.baseWidth}px;
    height: ${theme.metrics.px(56)}px;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.metrics.px(36)}px;
    border-width: ${theme.metrics.px(2)}px;
    border-color: ${theme.colors[bg]};

    align-items: center;
    justify-content: center;

    ${outline &&
    css`
      background-color: ${theme.colors.background};
    `}

    ${floating &&
    css`
      position: absolute;
      bottom: ${theme.metrics.px(16)}px;
      left: ${theme.metrics.px(23.5)}px;
      right: ${theme.metrics.px(23.5)}px;
    `}
  `}
`;

export const TextButton = styled.Text<TextButtonStyledProps>`
  ${({ theme, color }) => css`
    color: ${color ? theme.colors[color] : theme.colors.background};
    font-size: ${theme.metrics.px(16)}px;
    font-family: ${theme.fonts.bold};
    text-transform: uppercase;
  `}
`;
