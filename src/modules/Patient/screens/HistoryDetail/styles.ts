import styled, { css } from 'styled-components/native';

export const ObservationsContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: ${theme.metrics.baseWidth}px;
    padding: ${theme.metrics.px(8)}px;
    border-radius: ${theme.metrics.px(8)}px;
    border-width: ${theme.metrics.px(1)}px;
    border-color: ${theme.colors.greyDark};
  `}
`;

export const DateTimeContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: ${theme.metrics.baseWidth}px;
    margin-top: ${theme.metrics.px(24)}px;
  `}
`;
