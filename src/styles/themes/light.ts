import { DefaultTheme } from 'styled-components';

/**
 * 밝은 테마이다.
 */
const Light: DefaultTheme = {
  mainColors: {
    primary: {
      base: '#535150',
      dark: '#42403f',
      light: '#f1f1f1',
    },
    secondary: {
      base: '#34558b',
      dark: '#1c4376',
      light: '#f0f1f6',
    },
  },
  subColors: {
    success: '#88b04b',
    warning: '#f5df4d',
    error: '#ff5a4a',
    info: '#005baf',
    content: '#ffffff',
    text: '#2b2a2a',
    border: '#a5a4a3',
    disabled: '#e0e0df',
    pageBackground: '#ffffff',
  },
  variants: {
    borderRadius: '4px',
    borderWidth: '1px',
  },
};

export default Light;
