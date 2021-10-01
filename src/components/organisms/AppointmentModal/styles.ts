import styled from 'styled-components/native';

export const ContentPaddingView = styled.View`
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const ServicesView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingLeft: 24,
  },
})``;

export const TimesView = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
`;
