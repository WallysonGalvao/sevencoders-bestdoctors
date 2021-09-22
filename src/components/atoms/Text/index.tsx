import { CSSProperties } from 'react';
import styled, { css } from 'styled-components/native';

export type BaseTextProps = {
  align?: CSSProperties['textAlign'];
  w?: CSSProperties['width'];
  h?: CSSProperties['height'];
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
};

export const BaseText = styled.Text<BaseTextProps>`
  ${({ theme, align, w, mt, mb, ml, mr }) => css`
    width: ${w ? w : 'auto'};
    margin-top: ${theme.metrics.px(mt || 0)}px;
    margin-bottom: ${theme.metrics.px(mb || 0)}px;
    margin-left: ${theme.metrics.px(ml || 0)}px;
    margin-right: ${theme.metrics.px(mr || 0)}px;
    text-align: ${align ? align : 'left'};
  `}
`;

export const Title = styled(BaseText)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.metrics.px(28)}px;
    font-family: ${theme.fonts.bold};
  `}
`;

export const CardTitle = styled(BaseText)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.metrics.px(16)}px;
    font-family: ${theme.fonts.bold};
  `}
`;

export const RegularText = styled(BaseText)<{ size?: number }>`
  ${({ theme, size }) => css`
    color: ${theme.colors.dark};
    font-size: ${theme.metrics.px(size || 14)}px;
    font-family: ${theme.fonts.regular};
  `}
`;

export const SemiBoldText = styled(BaseText)`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-size: ${theme.metrics.px(16)}px;
    font-family: ${theme.fonts.semiBold};
  `}
`;
