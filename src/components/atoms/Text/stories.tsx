import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import { Title, CardTitle, RegularText } from '.';
import { Container } from '../Container';

const story = storiesOf('Title', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Title', () => <Title>{text('text', 'Bem-vindo de volta!')}</Title>);

story.add('CardTitle', () => <CardTitle>{text('text', 'PACIENTE')}</CardTitle>);

story.add('RegularText', () => (
  <RegularText>
    {text(
      'text',
      'Irei cadastrar meu perfil médico para atender meus pacientes e me associar à uma clinica (opcional).',
    )}
  </RegularText>
));
