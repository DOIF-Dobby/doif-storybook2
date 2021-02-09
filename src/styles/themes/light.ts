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
    pageBackground: '#f1f3f5',
    boxBackground: '#ffffff',
  },
  variants: {
    borderRadius: '4px',
    borderWidth: '1px',
  },
  markdown: {
    bgColor: '#ffffff',
    boxBgColor: '#f5f6fa',
    lineColor: '#e9e9ec',
    borderRadius: '6px',
    textColor: '#2b2a2a',
    blockquoteLine: '#34558b',
    tableBorderColor: '#dfe2e5',
  },
};

export default Light;
