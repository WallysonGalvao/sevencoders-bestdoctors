import React, { useState } from 'react';
import {
  BaseBackground,
  Title,
  Input,
  CategoriesList,
  DoctorsList,
} from '~/components';

export const SearchScreen = () => {
  const [query, setQuery] = useState('');

  return (
    <BaseBackground pr={24} pl={24}>
      <Title>Pesquisa</Title>
      <Input
        mb={24}
        mt={24}
        label="NOME DO MÉDICO"
        placeholder="Ex: Gabriel Rangel"
        value={query}
        onChangeText={text => setQuery(text)}
      />
      {query.length > 1 ? <DoctorsList /> : <CategoriesList />}
    </BaseBackground>
  );
};
