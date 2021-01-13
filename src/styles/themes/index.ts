import Dark from './dark';
import Light from './light';
import { DoifThemeProps } from './DoifThemeProps';

/**
 * 테마 타입을 모아서 export 한다.
 * 해당 테마는 사용하는 클리이언트에서 ThemeProvider에 주입한다.
 */
export const theme: { [key: string]: DoifThemeProps } = {
  light: Light,
  dark: Dark,
};
