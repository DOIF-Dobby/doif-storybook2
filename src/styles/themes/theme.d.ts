import 'styled-components';
import { DoifThemeProps } from './DoifThemeProps';

declare module 'styled-components' {
  export interface DefaultTheme extends DoifThemeProps {}
}
