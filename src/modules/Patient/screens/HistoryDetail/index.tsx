import React, { useState, useMemo } from 'react';
import { isBefore } from 'date-fns';

import {
  BaseBackground,
  BaseScrollContainer,
  Title,
  GoBackButton,
  DoctorCard,
  CardTitle,
  Input,
  BaseContainer,
  TimeCard,
  ServiceCard,
  BaseText,
  Button,
  AppointmentReviewModal,
  FeedbackModal,
} from '~/components';

import { useHistoryStore } from '~/services/store';

import * as S from './styles';

export const HistoryDetail = () => {
  const { appointment } = useHistoryStore();
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);

  const isCancelable = useMemo(() => {
    return isBefore(Date.now(), new Date(appointment.date));
  }, [appointment?.date]);

  return (
    <BaseBackground>
      <BaseScrollContainer>
        <GoBackButton />
        <Title mb={24}>Detalhe da Consulta</Title>
        <CardTitle mb={16}>MÉDICO</CardTitle>
        <DoctorCard doctor={appointment.doctor} />

        <S.DateTimeContainer>
          <BaseContainer w={240}>
            <CardTitle mb={16}>DATA</CardTitle>
            <Input label="DATA" w={160} value={appointment.date} />
          </BaseContainer>
          <BaseContainer w={160}>
            <CardTitle mb={16}>HORÁRIO</CardTitle>
            <TimeCard time={appointment.time} />
          </BaseContainer>
        </S.DateTimeContainer>

        <CardTitle mt={24} mb={16}>
          SERVIÇO
        </CardTitle>
        <ServiceCard service={appointment.service} selected />

        <CardTitle mt={24} mb={16}>
          OBSERVAÇÕES MÉDICAS
        </CardTitle>
        <S.ObservationsContainer>
          <BaseText color="greyDark" size={12}>
            {appointment.observations}
          </BaseText>
        </S.ObservationsContainer>
      </BaseScrollContainer>
      <Button
        kind={isCancelable ? 'danger' : 'primary'}
        onPress={() =>
          isCancelable ? setFeedbackModalOpen(true) : setReviewModalOpen(true)
        }
        floating>
        {isCancelable ? 'CANCELAR CONSULTA' : 'AVALIAR CONSULTA'}
      </Button>

      {reviewModalOpen && (
        <AppointmentReviewModal
          visible={reviewModalOpen}
          onClose={() => setReviewModalOpen(false)}
        />
      )}

      {feedbackModalOpen && (
        <FeedbackModal
          type="error"
          onClose={() => setFeedbackModalOpen(false)}
          secondaryButtonText="CONFIRMAR CANCELAMENTO"
          secondaryButtonAction={() => setFeedbackModalOpen(false)}
          text="Deseja cancelar o agendamento?"
          visible={feedbackModalOpen}
        />
      )}
    </BaseBackground>
  );
};
