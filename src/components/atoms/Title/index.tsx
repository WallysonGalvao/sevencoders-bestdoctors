import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const Title = () => {
  return <Text style={styles.title}>Bem-vindo de volta</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: 'blue',
    fontWeight: 'bold',
  },
});
