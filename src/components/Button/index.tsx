import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Button = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.textButton}>Enviar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    width: 232,
    height: 56,
    borderRadius: 36,
  },
  textButton: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
