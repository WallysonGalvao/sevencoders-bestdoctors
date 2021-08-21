import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, text } from '@storybook/addon-knobs';

import { Container } from '~/components';
import { SelectTypeCard } from '.';

const story = storiesOf('SelectTypeCard', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Standard', () => (
  <SelectTypeCard
    selected={boolean('selected', false)}
    title={text('title', 'Paciente')}
    description={text(
      'description',
      'Vou buscar as clínicas e médicos próximos a mim para agendar consultas e ter um histórico.',
    )}
  />
));
