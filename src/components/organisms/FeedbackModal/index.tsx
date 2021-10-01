import React from 'react';
import { Title, SuccessImage, ErrorImage, Button } from '~/components/atoms';
import { Modal } from '~/components/molecules';
import successBackground from '~/assets/img/success_modal_background.png';
import errorBackground from '~/assets/img/error_modal_background.png';

import * as S from './styles';

type FeedbackModalProps = {
  type?: string;
  visible: boolean;
  onClose: () => void;
  text: string;
  primaryButtonAction?: () => void;
  primaryButtonText?: string;
  secondaryButtonText?: string;
};

export const FeedbackModal = ({
  type,
  visible,
  onClose,
  text,
  primaryButtonAction,
  primaryButtonText,
  secondaryButtonText,
}: FeedbackModalProps) => {
  return (
    <Modal
      type={type || 'success'}
      visible={visible}
      h={528}
      buttonAction={primaryButtonAction || onClose}
      buttonText={primaryButtonText || 'FECHAR'}>
      <S.ContainerBackground
        source={type === 'error' ? errorBackground : successBackground}
        resizeMode="cover">
        {type === 'error' ? <ErrorImage /> : <SuccessImage size="small" />}
        <Title
          w={320}
          mb={36}
          color={type === 'error' ? 'dark' : 'primary'}
          align="center">
          {text}
        </Title>
        {secondaryButtonText && (
          <Button kind="outline-danger">{secondaryButtonText}</Button>
        )}
      </S.ContainerBackground>
    </Modal>
  );
};
