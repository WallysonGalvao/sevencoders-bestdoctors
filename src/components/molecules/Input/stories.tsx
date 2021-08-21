import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import { Container } from '~/components';
import { Input } from '.';

const story = storiesOf('Input', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Standard', () => (
  <Input
    label={text('label', 'EMAIL')}
    placeholder={text('placeholder', 'Seu email')}
  />
));
