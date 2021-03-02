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
    content: '#424141',
    text: '#fafafa',
    border: '#fafafa',
    disabled: '#e0e0df',
    pageBackground: '#424141',
    boxBackground: '#5c5c5c',
  },
  variants: {
    borderRadius: '4px',
    borderWidth: '1px',
  },
  markdown: {
    bgColor: '#ffffff',
    boxBgColor: '#fafafa',
    lineColor: '#f7f7f8',
    borderRadius: '6px',
    textColor: '#2b2a2a',
    tableBorderColor: '#dfe2e5',
    quoteColor: '#b8b8ba',
    commentColor: '#9e9e9e',
    attributeColor: '#e88282',
    linkColor: '#1ea7fd',
    urlColor: '#1ea7fd',
    disableBgColor: '#f5f6fa',
  },
  sideMenuColors: {
    primary: {
      depth1: '#535150',
      depth2: '#6B6969',
      depth3: '#848282',
      depth4: '#9c9B9B',
      borderLeft: '#dcca6f',
      selected: '#F5dF4D',
      text: '#ffffff',
    },
    secondary: {
      depth1: '#34558b',
      depth2: '#516D9B',
      depth3: '#6E85AC',
      depth4: '#8B9DBC',
      borderLeft: '#e19454',
      selected: '#FF922B',
      text: '#ffffff',
    },
  },
  headerColors: {
    background: '#5c5c5c',
  },
  formColors: {
    required: '#fa5252',
    border: '#fab',
    labelBackground: '#fab',
  },
};

export default Dark;
