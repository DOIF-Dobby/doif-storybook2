import { DefaultTheme } from 'styled-components';

/**
 * 밝은 테마이다.
 */
const Light: DefaultTheme = {
  colors: {
    primary: {
      base: '#535150',
      dark: '#42403f',
      light: '#e0e0df',
    },
    secondary: {
      base: '#34558b',
      dark: '#1c4376',
      light: '#dde0eb',
    },
    success: '#88b04b',
    warning: '#f5df4d',
    error: '#ff5a4a',
    info: '#005baf',
    content: '#ffffff',
    text: '#383736',
    border: '#a5a4a3',
    pageBackground: '#ffffff',
  },
  variants: {
    borderRadius: '4px',
  },
};

export default Light;
