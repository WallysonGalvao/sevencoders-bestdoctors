import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const List = styled(FlatList as new () => FlatList).attrs({
  contentContainerStyle: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 80,
  },
})`
  width: 100%;
  height: 100%;
`;
