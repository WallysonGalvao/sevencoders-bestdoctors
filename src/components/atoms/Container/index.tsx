import { CSSProperties } from 'react';
import styled, { css } from 'styled-components/native';

import { theme as th } from '~/styles/theme';

import backgroundSource from '~/assets/img/main_background.png';

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
  bg?: keyof typeof th.colors;
  br?: number;
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
    bg,
    br,
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
    background-color: ${bg ? theme.colors[bg] : theme.colors.transparent};
    border-radius: ${theme.metrics.px(br || 0)}px;
    overflow: hidden;
  `}
`;

export const BaseBackground = styled.ImageBackground.attrs({
  source: backgroundSource,
})<BaseProps>`
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
    pr,
    pl,
    br,
  }) => css`
    flex: 1;
    flex-direction: ${dir || 'column'};
    align-items: ${align || 'flex-start'};
    justify-content: ${justify || 'flex-start'};
    width: ${w ? `${theme.metrics.px(w)}px` : '100%'};
    height: ${h ? `${theme.metrics.px(h)}px` : '100%'};
    margin-top: ${theme.metrics.px(mt || 0)}px;
    margin-bottom: ${theme.metrics.px(mb || 0)}px;
    margin-left: ${theme.metrics.px(ml || 0)}px;
    margin-right: ${theme.metrics.px(mr || 0)}px;
    padding-top: ${theme.metrics.px(pt || 48)}px;
    padding-bottom: ${theme.metrics.px(pb || 0)}px;
    padding-right: ${theme.metrics.px(pr || 0)}px;
    padding-left: ${theme.metrics.px(pl || 0)}px;
    border-radius: ${theme.metrics.px(br || 0)}px;
  `}
`;

export const BaseScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingBottom: 80,
  },
})`
  flex: 1;
`;
