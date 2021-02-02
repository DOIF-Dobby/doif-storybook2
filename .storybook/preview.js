import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/global-style';
import { theme } from '../src/styles/themes';

/**
 * 스토리북에서 globalType를 지정할 수 있게끔 해줌.
 * 밑에 코드는 스토리북에서 쓰는 테마가 아니라 우리가 패키지로 롤업해서 export할 테마를 지정한다.
 * src/styles/themes/index.ts 의 theme와 동일하다
 */
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
};

/**
 * 해당 데코레이터는 글로벌하게 적용된다.
 * globalTypes에서 설정한 테마 타입으로 src/styles/themes/index.ts의 theme에서 선택하여 ThemeProvider에 주입한다.
 */
export const decorators = [
  (Story, context) => {
    return (
      <ThemeProvider theme={theme[context.globals.theme]}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
