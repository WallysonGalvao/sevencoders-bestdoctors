import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

type InputProps = TextInputProps & {
  label: string;
};

export const Input = ({ label, placeholder }: InputProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <S.InputContainer focus={focus}>
      <S.InputLabel>{label}</S.InputLabel>
      <S.InputText
        placeholder={placeholder}
        onFocus={() => setFocus(!focus)}
        onEndEditing={() => setFocus(!focus)}
      />
    </S.InputContainer>
  );
};
