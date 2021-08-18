import styled, { css } from 'styled-components/native';

import { ButtonProps } from './';

type Button = Pick<ButtonProps, 'outline'>;

export const ButtonContainer = styled.TouchableOpacity<Button>`
  ${({ theme, outline }) => css`
    width: ${theme.metrics.px(232)}px;
    height: ${theme.metrics.px(56)}px;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.metrics.px(36)}px;
    border-width: ${theme.metrics.px(2)}px;
    border-color: ${theme.colors.primary};

    align-items: center;
    justify-content: center;

    ${outline &&
    css`
      background-color: ${theme.colors.background};
    `}
  `}
`;

export const TextButton = styled.Text<Button>`
  ${({ theme, outline }) => css`
    color: ${theme.colors.background};
    font-size: ${theme.metrics.px(16)}px;
    font-family: ${theme.fonts.bold};
    text-transform: uppercase;

    ${outline &&
    css`
      color: ${theme.colors.primary};
    `}
  `}
`;
