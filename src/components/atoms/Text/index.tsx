import styled, { css } from 'styled-components/native';

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.metrics.px(28)}px;
    font-family: ${theme.fonts.bold};
  `}
`;

export const CardTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.metrics.px(16)}px;
    font-family: ${theme.fonts.bold};
  `}
`;

export const RegularText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-size: ${theme.metrics.px(14)}px;
    font-family: ${theme.fonts.regular};
  `}
`;
