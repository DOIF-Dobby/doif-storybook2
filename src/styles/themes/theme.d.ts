import 'styled-components';
import { DoifThemeProps } from './DoifThemeProps';

/**
 * DoifThemeProps 타입을 extends 한 DefaultTheme를 styled-components에 지정한다.
 * DefaultTheme 라는 이름은 고정이다. 이 이름을 바꾸면 styled-components에서 인식하지 못한다.
 */
declare module 'styled-components' {
  export interface DefaultTheme extends DoifThemeProps {}
}
