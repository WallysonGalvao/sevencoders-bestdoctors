import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { BaseTouchContainer } from '../Container';
import { colors } from '~/styles/colors';

export const GoBackButton = () => {
  const { goBack } = useNavigation();

  const handleGoBak = () => goBack();

  return (
    <BaseTouchContainer h={32} w={32} onPress={handleGoBak}>
      <Icon color={colors.primary} name="arrowleft" size={32} />
    </BaseTouchContainer>
  );
};
