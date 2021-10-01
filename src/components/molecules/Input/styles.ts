import styled, { css } from 'styled-components/native';
import { BaseContainer } from '~/components/atoms';

export const InputContainer = styled(BaseContainer)<{ focus: boolean }>`
  ${({ theme, focus }) => css`
    width: ${theme.metrics.baseWidth}px;
    height: ${theme.metrics.px(56)}px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-width: ${theme.metrics.px(1)}px;
    border-color: ${theme.colors.greyDark};
    border-radius: ${theme.metrics.px(8)}px;
    padding-horizontal: ${theme.metrics.px(6)}px;
    padding-vertical: ${theme.metrics.px(2)}px;

    ${focus &&
    css`
      border-color: ${theme.colors.primary};
    `}
  `}
`;

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.metrics.px(14)}px;
    font-family: ${theme.fonts.semiBold};
    margin: 0;
    padding: 0;
  `}
`;

export const InputText = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.metrics.px(16)}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.dark};
    margin: 0;
    padding: 0;
  `}
`;

export const ErrorLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(12)}px;
    font-family: ${theme.fonts.regular};
    color: red;
  `}
`;
