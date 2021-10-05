import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const List = styled(FlatList as new () => FlatList).attrs(
  ({ theme }) => ({
    columnWrapperStyle: {
      width: theme.metrics.wp(87),
      justifyContent: 'space-between',
      paddingBottom: 16,
    },
  }),
)``;
