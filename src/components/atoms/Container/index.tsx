import { CSSProperties } from 'react';
import styled, { css } from 'styled-components/native';

export type BaseProps = {
  dir?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  w?: number;
  h?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
};

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

export const BaseContainer = styled.View<BaseProps>`
  ${({
    theme,
    dir,
    align,
    justify,
    w,
    h,
    mt,
    mb,
    ml,
    mr,
    pt,
    pb,
    pl,
    pr,
  }) => css`
    display: flex;
    flex-direction: ${dir || 'column'};
    align-items: ${align || 'flex-start'};
    justify-content: ${justify || 'flex-start'};
    height: ${h ? `${theme.metrics.px(h)}px` : '100%'};
    width: ${w ? `${theme.metrics.px(w)}px` : '100%'};
    margin-top: ${theme.metrics.px(mt || 0)}px;
    margin-bottom: ${theme.metrics.px(mb || 0)}px;
    margin-left: ${theme.metrics.px(ml || 0)}px;
    margin-right: ${theme.metrics.px(mr || 0)}px;
    padding-top: ${theme.metrics.px(pt || 0)}px;
    padding-bottom: ${theme.metrics.px(pb || 0)}px;
    padding-left: ${theme.metrics.px(pl || 0)}px;
    padding-right: ${theme.metrics.px(pr || 0)}px;
  `}
`;

export const BaseTouchContainer = styled.TouchableOpacity<BaseProps>`
  ${({
    theme,
    dir,
    align,
    justify,
    w,
    h,
    mt,
    mb,
    ml,
    mr,
    pt,
    pb,
    pl,
    pr,
  }) => css`
    display: flex;
    flex-direction: ${dir || 'column'};
    align-items: ${align || 'flex-start'};
    justify-content: ${justify || 'flex-start'};
    height: ${h ? `${theme.metrics.px(h)}px` : '100%'};
    width: ${w ? `${theme.metrics.px(w)}px` : '100%'};
    margin-top: ${theme.metrics.px(mt || 0)}px;
    margin-bottom: ${theme.metrics.px(mb || 0)}px;
    margin-left: ${theme.metrics.px(ml || 0)}px;
    margin-right: ${theme.metrics.px(mr || 0)}px;
    padding-top: ${theme.metrics.px(pt || 0)}px;
    padding-bottom: ${theme.metrics.px(pb || 0)}px;
    padding-left: ${theme.metrics.px(pl || 0)}px;
    padding-right: ${theme.metrics.px(pr || 0)}px;
  `}
`;
