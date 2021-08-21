import styled, { css } from 'styled-components/native';

export const Container = styled.ImageBackground.attrs({
  resizeMode: 'stretch',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  ${({ theme }) => css`
    width: ${theme.metrics.px(246)}px;
    height: ${theme.metrics.px(246)}px;
  `}
`;
