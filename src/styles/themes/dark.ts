import { DefaultTheme } from 'styled-components';

/**
 * 어두운 테마이다.
 */
const Dark: DefaultTheme = {
  mainColors: {
    primary: {
      base: '#ffaa00',
      dark: '#ff0000',
      light: '#baba00',
    },
    secondary: {
      base: '#aafff0',
      dark: '#0000ff',
      light: '#00bbff',
    },
  },
  subColors: {
    success: '#88b04b',
    warning: '#f5df4d',
    error: '#ff5a4a',
    info: '#fafafa',
    content: '#ffffff',
    text: '#ff00ff',
    border: '#ff0000',
    disabled: '#e0e0df',
    pageBackground: '#424141',
    boxBackground: '#5c5c5c',
  },
  variants: {
    borderRadius: '4px',
    borderWidth: '1px',
  },
};

export default Dark;
