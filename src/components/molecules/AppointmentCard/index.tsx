import React from 'react';
import { format } from 'date-fns';
import { BaseTouchContainer, Avatar, BaseText } from '../../atoms';
import { useNavigation } from '@react-navigation/native';
import {
  AvatarContainer,
  TextContainer,
  ServiceContainer,
  DateContainer,
} from './styles';
import { Appointment, useHistoryStore } from '~/services/store';

type AppointmentCardProps = {
  appointment: Appointment;
};

export const AppointmentCard = ({ appointment }: AppointmentCardProps) => {
  const { setAppointment } = useHistoryStore();
  const { doctor, service, date } = appointment;
  const { navigate } = useNavigation();

  const onClick = () => {
    setAppointment(appointment);
    navigate('HistoryDetail');
  };

  return (
    <BaseTouchContainer
      onPress={onClick}
      dir="row"
      h={100}
      bg="white"
      w={328}
      br={16}>
      <AvatarContainer>
        <Avatar source={{ uri: doctor.image }} />
      </AvatarContainer>
      <TextContainer>
        <BaseText size={16} color="dark" fontFamily="bold">
          {doctor.name}
        </BaseText>
        <BaseText mb={12} size={12} color="greyDark">
          {doctor.specialty}
        </BaseText>

        <ServiceContainer>
          <BaseText size={12} fontFamily="semiBold" color="greyDark">
            {service.title}
          </BaseText>
        </ServiceContainer>
      </TextContainer>

      <DateContainer>
        <BaseText size={16} fontFamily="bold" color="greyDark">
          {format(new Date(date), 'dd/MM')}
        </BaseText>
      </DateContainer>
    </BaseTouchContainer>
  );
};
