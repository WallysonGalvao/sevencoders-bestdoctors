import React from 'react';
import { BaseBackground, Title, HistoricList } from '~/components';

export const HistoryScreen = () => {
  return (
    <BaseBackground pr={24} pl={24}>
      <Title mb={24}>Histórico</Title>
      <HistoricList />
    </BaseBackground>
  );
};
