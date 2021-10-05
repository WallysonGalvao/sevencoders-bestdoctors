import React from 'react';
import {
  BaseBackground,
  BaseContainer,
  Title,
  Avatar,
  TextLink,
  Input,
  Button,
} from '~/components';

export const ProfileScreen = () => {
  return (
    <BaseBackground pr={24} pl={24}>
      <Title>Perfil</Title>
      <BaseContainer align="center" mt={48}>
        <Avatar
          size="large"
          source={{
            uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          }}
        />
        <TextLink
          align="center"
          justify="center"
          mt={12}
          text="Alterar foto do perfil"
        />

        <Input mt={48} label="NOME" placeholder="Gabriel Rangel" />

        <Input mt={24} label="EMAIL" placeholder="gabriel@exemplo.com" />

        <Input mt={24} label="CELULAR" placeholder="(XX) XXXXX-XXXX" />

        <Button mt={24}>SALVAR ALTERAÇÕES</Button>

        <TextLink
          align="flex-start"
          justify="flex-start"
          mt={24}
          text="Sair da minha conta"
        />
      </BaseContainer>
    </BaseBackground>
  );
};
