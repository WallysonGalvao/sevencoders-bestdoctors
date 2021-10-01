import styled, { css } from 'styled-components/native';
import { BaseTouchContainer } from '~/components';

import { SelectTypeCardProps } from '.';

type CardContainer = Pick<SelectTypeCardProps, 'selected'>;

export const CardContainer = styled(BaseTouchContainer)<CardContainer>`
  ${({ theme, selected }) => css`
    width: ${theme.metrics.baseWidth}px;
    height: ${theme.metrics.px(120)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-width: ${theme.metrics.px(1)}px;
    border-color: ${theme.colors.grayDark};
    border-radius: ${theme.metrics.px(8)}px;
    padding: ${theme.metrics.px(6)}px;

    ${selected &&
    css`
      border-color: ${theme.colors.primary};
      border-width: ${theme.metrics.px(2)}px;
    `}
  `}
`;

export const CheckView = styled.View`
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const TextView = styled.View`
  width: 80%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CheckCircle = styled.View<CardContainer>`
  ${({ theme, selected }) => css`
    width: ${theme.metrics.px(24)}px;
    height: ${theme.metrics.px(24)}px;
    border-radius: ${theme.metrics.px(12)}px;
    border-color: ${theme.colors.grayDark};
    border-width: ${theme.metrics.px(2)}px;
    background-color: ${theme.colors.background};

    ${selected &&
    css`
      border-color: ${theme.colors.primary};
      background-color: ${theme.colors.primary};
    `}
  `}
`;
