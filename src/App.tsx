import React from 'react';
import { ThemeProvider } from 'styled-components';

import Storybook from '../storybook';
import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Storybook />
    </ThemeProvider>
  );
};

export default App;
