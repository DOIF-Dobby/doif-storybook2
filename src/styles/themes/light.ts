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
    border: '#c3c3c3',
    disabled: '#e0e0df',
    pageBackground: '#ebeced',
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
    tableBorderColor: '#dfe2e5',
    quoteColor: '#9e9e9e',
    commentColor: '#9e9e9e',
    attributeColor: '#e88282',
    linkColor: '#1ea7fd',
    urlColor: '#1ea7fd',
    disableBgColor: '#cfcfcf',
  },
  sideMenuColors: {
    primary: {
      depth1: '#535150',
      depth2: '#6B6969',
      depth3: '#848282',
      depth4: '#9c9B9B',
      borderLeft: '#ffffff',
      selected: '#F5dF4D',
      text: '#ffffff',
    },
    secondary: {
      depth1: '#34558b',
      depth2: '#516D9B',
      depth3: '#6E85AC',
      depth4: '#8B9DBC',
      borderLeft: '#ffffff',
      selected: '#20c997',
      text: '#ffffff',
    },
  },
  headerColors: {
    background: '#ffffff',
  },
  formColors: {
    required: '#fa5252',
    border: '#c3c3c3',
    labelBackground: '#f1f3f5',
    fieldBackground: '#ffffff',
    labelText: '#2b2a2a',
  },
  tableColors: {
    border: '#c3c3c3',
    captionText: '#2b2a2a',
    headerText: '#2b2a2a',
    rowText1: '#2b2a2a',
    rowText2: '#2b2a2a',
    tableBackground: '#ffffff',
    captionBackground: '#e9ecef',
    buttonBackground: '#ffffff',
    headerBackground: '#e9ecef',
    rowBackground1: '#ffffff',
    rowBackground2: '#f8f9fa',
    footerBackground: '#f1f3f5',
    paginationBackground: '#e9ecef',
    hoverRow: '#e9ecef',
    selectedRow: '#fff3bf',
  },
  pageHeaderColors: {
    menuName: '#2b2a2a',
    menuListItemName: '#9e9e9e',
    bottomLine: '#42403f',
  },
};

export default Light;
