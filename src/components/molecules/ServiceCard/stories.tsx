import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ServiceCard } from './index';
import { Container } from '../../atoms/Container';

const story = storiesOf('ServiceCard', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Standard', () => (
  <ServiceCard
    selected={boolean('Selected', false)}
    service={{
      title: text('Title,', 'CONSULTA'),
      price: text('Price', 'R$200'),
      description: text(
        'Description',
        'Consulta padrão para diagnosticar a saude do paciente',
      ),
    }}
  />
));

story.add('Selected', () => (
  <ServiceCard
    selected={boolean('Selected', true)}
    service={{
      title: text('Title,', 'CONSULTA'),
      price: text('Price', 'R$200'),
      description: text(
        'Description',
        'Consulta padrão para diagnosticar a saude do paciente',
      ),
    }}
  />
));
