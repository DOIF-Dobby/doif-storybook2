declare module '*.mdx';

// svg파일을 React 컴포넌트로 만들기 위함
declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  >>;

  const src: string;
  export default src;
}
