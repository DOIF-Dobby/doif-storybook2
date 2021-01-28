/**
 * 현재 프로젝트에서 사용하는 테마 interface이다.
 * 이 interface를 구현한 기본적인 테마를 만들어서 export 한다.
 * 또한 사용하는 클라이언트 쪽에서도 이 interface를 구현하여 직접 테마를 만들고 ThemeProvider에 주입할 수 있다.
 */
export interface DoifThemeProps {
  mainColors: DoifThemeMainColorProps;
  subColors: DoifThemeSubColorProps;
  variants: DoifThemeVariantProps;
}

/**
 * Main 색상 Props
 */
export interface DoifThemeMainColorProps {
  primary: {
    base: string;
    dark: string;
    light: string;
  };
  secondary: {
    base: string;
    dark: string;
    light: string;
  };
}

/**
 * Sub 색상 props
 */
export interface DoifThemeSubColorProps {
  success: string;
  warning: string;
  error: string;
  info: string;
  content: string;
  text: string;
  border: string;
  disabled: string;
  pageBackground: string;
  componentBackground: string;
}

/**
 * 모양 props
 */
export interface DoifThemeVariantProps {
  borderRadius: string;
  borderWidth: string;
}

/** 컬러 type */
export type DoifColorType = 'primary' | 'secondary';

/** 사이즈 type */
export type DoifSizeType = 'small' | 'medium' | 'large';

/** 모양 type */
export type DoifVariantType = 'fill' | 'outline' | 'ghost';
