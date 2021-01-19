import { DefaultTheme } from 'styled-components';

/**
 * 어두운 테마이다.
 */
const Dark: DefaultTheme = {
  mainColors: {
    primary: {
      base: '#fafafa',
      dark: '#fafafa',
      light: '#fafafa',
    },
    secondary: {
      base: '#fafafa',
      dark: '#fafafa',
      light: '#fafafa',
    },
  },
  subColors: {
    success: '#88b04b',
    warning: '#f5df4d',
    error: '#ff5a4a',
    info: '#fafafa',
    content: '#ffffff',
    text: '#ffffff',
    border: '#424141',
    pageBackground: '#424141',
  },
  variants: {
    borderRadius: '4px',
  },
};

export default Dark;
