import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { AuthWrapper, SelectTypeCard, Button } from '~/components';

import { useAuthStore } from '~/services/store';

type AccountType = 'patient' | 'doctor' | 'medical clinic';

export const SelectTypeCardScreen = () => {
  const { navigate } = useNavigation();
  const { setUser } = useAuthStore();

  const [accountType, setAccountType] = useState<AccountType>();

  const goToConfirmPhone = () => {
    if (accountType) {
      setUser({ accountType });
      navigate('ConfirmPhone');
    }
  };

  const changeAccountType = (type: AccountType) => {
    setAccountType(type);
  };

  return (
    <AuthWrapper
      title="Escolha o tipo de conta"
      bottomChildren={<Button onPress={goToConfirmPhone}>ENTRAR</Button>}>
      <SelectTypeCard
        description="Vou buscar as clínicas e médicos próximos a mim para agendar consultas e ter um histórico."
        selected={accountType === 'patient'}
        title="PACIENTE"
        onPress={() => changeAccountType('patient')}
      />
      <SelectTypeCard
        mt={16}
        description="Irei cadastrar meu perfil médico para anteder meus pacientes e me associar à uma clinica (opcional)."
        selected={accountType === 'doctor'}
        title="MÉDICO"
        onPress={() => changeAccountType('doctor')}
      />
      <SelectTypeCard
        mt={16}
        description="Irei cadastrar minha clinica e os colaboradores médicos para atender meus clientes."
        selected={accountType === 'medical clinic'}
        title="CLINICA MÉDICA"
        onPress={() => changeAccountType('medical clinic')}
      />
    </AuthWrapper>
  );
};
