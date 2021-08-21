import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import background from '~/assets/img/auth_background.png';
import logo from '~/assets/img/logo.png';

import * as S from './styles';

export const SplashScreen = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate('Login');
    }, 2000);
  }, [navigate]);

  return (
    <S.Container source={background}>
      <S.Logo source={logo} />
    </S.Container>
  );
};
