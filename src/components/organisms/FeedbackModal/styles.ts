import styled, { css } from 'styled-components/native';

export const ContainerBackground = styled.ImageBackground`
  ${({ theme }) => css`
    flex: 1;
    width: ${theme.metrics.wp(100)}px;
    align-items: center;
    justify-content: center;
  `}
`;
