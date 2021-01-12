import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/global-style';
import { theme } from '../src/styles/themes';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
