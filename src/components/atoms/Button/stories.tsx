import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, boolean } from '@storybook/addon-knobs';

import { Button } from '.';
import { Container } from '../Container';

const story = storiesOf('Button', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Standard', () => (
  <Button outline={boolean('outline', false)}>{text('text', 'Login')}</Button>
));
