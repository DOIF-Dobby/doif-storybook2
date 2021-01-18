import { DefaultTheme } from 'styled-components';

/**
 * 밝은 테마이다.
 */
const Light: DefaultTheme = {
  colors: {
    primary: '#535150',
    secondary: '#34558b',
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
