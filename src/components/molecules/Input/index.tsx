import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { BaseTextProps } from '~/components';

import * as S from './styles';

type InputProps = TextInputProps &
  BaseTextProps & {
    label: string;
    error?: string;
  };

export const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  ...props
}: InputProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <S.InputContainer pl={6} pt={2} pb={2} focus={focus} {...props}>
        <S.InputLabel>{label}</S.InputLabel>
        <S.InputText
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onFocus={() => setFocus(!focus)}
          onEndEditing={() => setFocus(!focus)}
        />
      </S.InputContainer>
      {error && <S.ErrorLabel>{error}</S.ErrorLabel>}
    </>
  );
};
