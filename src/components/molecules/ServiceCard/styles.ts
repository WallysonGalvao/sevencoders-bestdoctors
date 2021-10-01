import styled, { css } from 'styled-components/native';

export const ServiceCardContainer = styled.TouchableOpacity<{
  selected?: boolean;
}>`
  ${({ theme, selected }) => css`
    display: flex;
    flex-direction: column;
    padding-horizontal: ${theme.metrics.px(6)}px;
    padding-vertical: ${theme.metrics.px(8)}px;
    width: ${theme.metrics.px(260)}px;
    height: ${theme.metrics.px(100)}px;
    border-radius: ${theme.metrics.px(8)}px;
    border-width: ${theme.metrics.px(selected ? 2 : 1)}px;
    border-color: ${selected ? theme.colors.primary : theme.colors.greyDark};
    margin-right: ${theme.metrics.px(12)}px;
    background-color: ${theme.colors.background};
  `}
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
