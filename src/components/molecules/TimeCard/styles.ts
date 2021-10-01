import styled, { css } from 'styled-components/native';

export const TimeCardContainer = styled.TouchableOpacity<{
  selected?: boolean;
}>`
  ${({ theme, selected }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${theme.metrics.px(72)}px;
    height: ${theme.metrics.px(48)}px;
    border-radius: ${theme.metrics.px(8)}px;
    border-width: ${theme.metrics.px(selected ? 2 : 1)}px;
    border-color: ${selected ? theme.colors.primary : theme.colors.greyDark};
    margin-top: ${theme.metrics.px(12)}px;
    margin-right: ${theme.metrics.px(8)}px;
    background-color: ${theme.colors.background};
  `}
`;
