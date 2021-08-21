import React from 'react';
import { ThemeProvider } from 'styled-components';

// import Storybook from '../storybook';

import { Routes } from './routes';
import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
