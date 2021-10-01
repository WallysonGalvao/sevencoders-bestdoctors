import React, { useState } from 'react';
import {
  BaseBackground,
  BaseContainer,
  BaseScrollContainer,
  GoBackButton,
  BaseText,
  Avatar,
  CardTitle,
  ReviewCard,
  Button,
  AppointmentModal,
} from '~/components';

import { AirbnbRating } from 'react-native-ratings';
import { dayOfTheWeek } from '~/utils/date';
import { useAppointmentStore } from '~/services/store';

import * as S from './styles';

export const DoctorDetailScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { doctor } = useAppointmentStore();

  return (
    <BaseBackground>
      <BaseScrollContainer>
        <GoBackButton />

        <S.HeaderContainer>
          <Avatar size="large" source={{ uri: doctor.image }} />
          <BaseContainer ml={16} dir="column" w={192}>
            <BaseText fontFamily="bold" size={24} color="dark">
              {doctor.name}
            </BaseText>
            <BaseText fontFamily="medium" size={14} color="greyDark">
              {doctor.specialty}
            </BaseText>
            <BaseText fontFamily="regular" size={12} color="greyDark">
              {doctor.description}
            </BaseText>
            <S.RowView>
              <AirbnbRating
                size={14}
                showRating={false}
                isDisabled
                defaultRating={doctor.rating}
                starContainerStyle={{ marginHorizontal: -4.5 }}
              />
              <BaseText ml={6} size={10} color="greyDark">
                {`${doctor.rating} (${doctor.ratingNumber}) `}
              </BaseText>
            </S.RowView>
          </BaseContainer>
        </S.HeaderContainer>
        <CardTitle mt={16} mb={4}>
          Local de Atendimento
        </CardTitle>
        <BaseText fontFamily="regular" size={12} color="greyDark">
          {doctor.address}
        </BaseText>
        <CardTitle mt={16} mb={4}>
          Horário de Atendimento
        </CardTitle>
        {doctor.serviceHours.map(date => (
          <S.RowView key={date.day}>
            <BaseText mt={8} fontFamily="semiBold" size={12} color="greyDark">
              {dayOfTheWeek(date.day)} :
            </BaseText>
            <BaseText size={12} color="greyDark">
              {` ${date.open} às ${date.close}`}
            </BaseText>
          </S.RowView>
        ))}

        <CardTitle mt={16} mb={4}>
          Avaliações
        </CardTitle>
        {doctor.reviews.map(review => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </BaseScrollContainer>
      <Button onPress={() => setModalVisible(true)} floating>
        AGENDAR UMA CONSULTA
      </Button>
      {modalVisible && (
        <AppointmentModal
          onClose={() => setModalVisible(false)}
          visible={modalVisible}
        />
      )}
    </BaseBackground>
  );
};
