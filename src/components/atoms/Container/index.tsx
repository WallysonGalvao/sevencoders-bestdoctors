import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.background};
    align-items: center;
    justify-content: center;
  `}
`;
