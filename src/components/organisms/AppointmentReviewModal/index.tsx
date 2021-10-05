import React from 'react';
import { AirbnbRating } from 'react-native-ratings';
import { CardTitle, BaseContainer } from '~/components/atoms';
import { Modal, Input } from '~/components/molecules';
import { theme } from '~/styles/theme';

type AppointmentReviewModalProps = {
  visible: boolean;
  onClose: () => void;
};

export const AppointmentReviewModal = ({
  visible,
  onClose,
}: AppointmentReviewModalProps) => {
  return (
    <Modal
      h={600}
      title="Avaliar Consulta"
      visible={visible}
      onClose={onClose}
      buttonText="AVALIAR CONSULTA">
      <BaseContainer ph={24} pt={24}>
        <CardTitle mb={12}>NOTA</CardTitle>
        <AirbnbRating size={theme.metrics.px(36)} showRating={false} />

        <CardTitle mt={24} mb={12}>
          OBSERVAÇÃO
        </CardTitle>
        <Input label="AVALIE SUA CONSULTA" h={224} multiline />
      </BaseContainer>
    </Modal>
  );
};
