import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { MockDataType } from '.';

export const List = styled(FlatList as new () => FlatList<MockDataType>).attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 48,
  },
})``;
