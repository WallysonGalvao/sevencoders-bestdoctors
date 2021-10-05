import React from 'react';
import { CATEGORIES_MOCK } from './settings';
import { CategoryCard } from '~/components/molecules';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

type Category = {
  id: number;
  title: string;
  image: string;
};

export const CategoriesList = () => {
  const { navigate } = useNavigation();

  const onSelectCategory = (item: Category) => {
    navigate('CategoryDetail', {
      title: item.title,
    });
  };

  return (
    <S.List
      numColumns={2}
      data={CATEGORIES_MOCK}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <CategoryCard
          onPress={() => onSelectCategory(item)}
          title={item.title}
          image={item.image}
        />
      )}
    />
  );
};
