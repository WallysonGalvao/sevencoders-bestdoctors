import styled, { css } from 'styled-components/native';

export const Container = styled.ImageBackground.attrs({
  resizeMode: 'stretch',
})`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-vertical: ${theme.metrics.px(48)}px;
    padding-horizontal: ${theme.metrics.px(24)}px;
  `}
`;

export const ContentContainer = styled.View`
  flex: 0.75;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  flex: 0.25;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
