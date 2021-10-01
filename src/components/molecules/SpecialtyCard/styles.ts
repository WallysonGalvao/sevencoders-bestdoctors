import styled, { css } from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-horizontal: ${theme.metrics.px(8)}px;
    height: ${theme.metrics.px(28)}px;
    background-color: ${theme.colors.white};
    border-radius: ${theme.metrics.px(14)}px;
    margin-right: ${theme.metrics.px(8)}px;
  `}
`;
