import React from 'react';
import { AirbnbRating } from 'react-native-ratings';
import { BaseTouchContainer, Avatar, BaseText } from '../../atoms';
import { useNavigation } from '@react-navigation/native';
import { DoctorType, useAppointmentStore } from '~/services/store';

import * as S from './styles';

type DoctorCardProps = {
  doctor: DoctorType;
};

export const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const { navigate } = useNavigation();
  const { setDoctor } = useAppointmentStore();

  const onClick = () => {
    setDoctor(doctor);
    navigate('DoctorDetail');
  };

  return (
    <BaseTouchContainer
      onPress={onClick}
      dir="row"
      h={100}
      bg="white"
      w={328}
      br={16}>
      <S.AvatarContainer>
        <Avatar source={{ uri: doctor.image }} />
      </S.AvatarContainer>
      <S.TextContainer>
        <BaseText size={16} color="dark" fontFamily="bold">
          {doctor.name}
        </BaseText>
        <BaseText mb={12} size={12} color="greyDark">
          {doctor.specialty}
        </BaseText>

        <S.RatingContainer>
          <AirbnbRating
            size={14}
            showRating={false}
            isDisabled
            defaultRating={doctor.rating}
          />
          <BaseText ml={6} size={10} color="greyDark">
            ({doctor.rating})
          </BaseText>
        </S.RatingContainer>
      </S.TextContainer>
    </BaseTouchContainer>
  );
};
