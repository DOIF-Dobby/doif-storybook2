/**
 * 현재 프로젝트에서 사용하는 테마 interface이다.
 * 이 interface를 구현한 기본적인 테마를 만들어서 export 한다.
 * 또한 사용하는 클라이언트 쪽에서도 이 interface를 구현하여 직접 테마를 만들고 ThemeProvider에 주입할 수 있다.
 */
export interface DoifThemeProps {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    content: string;
    text: string;
    pageBackground: string;
  };
}
