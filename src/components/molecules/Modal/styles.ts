import styled, { css } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ModalView = styled.Modal.attrs(({ visible }) => ({
  visible,
}))``;

export const DarkTransparentView = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.darkTransparent};
  `}
`;

export const ModalBackground = styled(LinearGradient)<{ h?: number }>`
  ${({ theme, h }) => css`
    position: absolute;
    bottom: 0;
    height: ${h ? `${theme.metrics.px(h)}px` : '90%'};
    width: 100%;
    background-color: ${theme.colors.background};
    border-top-right-radius: ${theme.metrics.px(24)}px;
    border-top-left-radius: ${theme.metrics.px(24)}px;
  `}
`;

export const ModalScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 48,
  },
})`
  flex: 1;
`;

export const ModalRegularView = styled.View`
  flex: 1;
`;

export const ContentPaddingView = styled.View`
  ${({ theme }) => css`
    padding-horizontal: ${theme.metrics.px(24)}px;
  `}
`;
