import React from 'react';
import { Title, BaseTouchContainer, Button } from '~/components/atoms';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '~/styles/theme';

import * as S from './styles';

type ModalProps = {
  visible: boolean;
  onClose?: () => void;
  buttonText: string;
  buttonAction: () => void;
  title?: string;
  children: React.ReactNode;
  scroll?: boolean;
  h?: number;
  type?: string;
};

export const Modal = ({
  visible,
  onClose,
  buttonText,
  buttonAction,
  title,
  children,
  scroll,
  h,
  type,
}: ModalProps) => {
  return (
    <S.ModalView visible={visible} transparent>
      <S.DarkTransparentView>
        <S.ModalBackground
          h={h}
          colors={[
            'rgb(248, 243, 245)',
            'rgb(229, 235, 250)',
            'rgb(241, 240, 247)',
          ]}>
          {scroll ? (
            <S.ModalScrollView>
              {onClose && (
                <BaseTouchContainer
                  mt={24}
                  pr={24}
                  h={36}
                  bg="transparent"
                  align="flex-end"
                  onPress={onClose}>
                  <Icon
                    size={theme.metrics.px(32)}
                    name="close"
                    color={theme.colors.primary}
                  />
                </BaseTouchContainer>
              )}
              {title && (
                <S.ContentPaddingView>
                  <Title>{title}</Title>
                </S.ContentPaddingView>
              )}

              {children}
            </S.ModalScrollView>
          ) : (
            <S.ModalRegularView>
              {onClose && (
                <BaseTouchContainer
                  mt={24}
                  pr={24}
                  h={36}
                  bg="transparent"
                  align="flex-end"
                  onPress={onClose}>
                  <Icon
                    size={theme.metrics.px(32)}
                    name="close"
                    color={theme.colors.primary}
                  />
                </BaseTouchContainer>
              )}
              {title && (
                <S.ContentPaddingView>
                  <Title>{title}</Title>
                </S.ContentPaddingView>
              )}

              {children}
            </S.ModalRegularView>
          )}
          {buttonText && (
            <Button
              onPress={buttonAction}
              kind={type === 'error' ? 'danger' : 'primary'}
              floating>
              {buttonText}
            </Button>
          )}
        </S.ModalBackground>
      </S.DarkTransparentView>
    </S.ModalView>
  );
};
