import React, { useState } from 'react';
import { CardTitle } from '~/components/atoms';
import { Input, ServiceCard, TimeCard, Modal } from '~/components/molecules';
import { FeedbackModal } from '../FeedbackModal';
import { SERVICES_MOCK, TIME_MOCK } from './settings';

import * as S from './styles';

type AppointmentModalProps = {
  visible: boolean;
  onClose: () => void;
};

export const AppointmentModal = ({
  visible,
  onClose,
}: AppointmentModalProps) => {
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  return (
    <Modal
      scroll
      title="Novo Agendamento"
      visible={visible}
      onClose={onClose}
      buttonText="AGENDAR AGORA"
      buttonAction={() => setSuccessModalVisible(true)}>
      <S.ContentPaddingView>
        <CardTitle mt={24}>DATA</CardTitle>
        <Input mt={12} label="DIA" placeholder="01/07/2021" />
        <CardTitle mt={24} mb={12}>
          SERVIÇO
        </CardTitle>
      </S.ContentPaddingView>

      <S.ServicesView horizontal>
        {SERVICES_MOCK.map((item, index) => (
          <ServiceCard key={item.id} service={item} selected={index === 0} />
        ))}
      </S.ServicesView>
      <CardTitle ml={24} mt={24}>
        HORÁRIO
      </CardTitle>
      <S.TimesView>
        {TIME_MOCK.map((item, index) => (
          <TimeCard key={item.id} time={item.time} selected={index === 0} />
        ))}
      </S.TimesView>

      {successModalVisible && (
        <FeedbackModal
          visible={successModalVisible}
          text="Agendamento realizado com sucesso!"
          onClose={onClose}
        />
      )}
    </Modal>
  );
};
