import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { AuthWrapper, Input, Button, TextLink } from '~/components';

export const LoginScreen = () => {
  const { navigate } = useNavigation();

  const goToCreateAccount = () => {
    navigate('CreateAccount');
  };

  return (
    <AuthWrapper
      title="Bem-vindo de volta!"
      bottomChildren={
        <>
          <Button dir="column">ENTRAR</Button>
          <Button mt={24} outline onPress={goToCreateAccount}>
            CRIAR NOVA CONTA
          </Button>
        </>
      }>
      <Input label="EMAIL" placeholder="meu.email@exemplo.com" />
      <Input mt={16} label="SENHA" placeholder="*********************" />
      <TextLink text="Esqueceu sua senha?" mt={36} />
    </AuthWrapper>
  );
};
