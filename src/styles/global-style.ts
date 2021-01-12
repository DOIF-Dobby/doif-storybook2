import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

/**
 * Storybook 모든 컴포넌트에서 적용될 Global Style
 * 모듈로 export 할 때도 포함되어야 한다.
 * 그리고 사용하는 쪽에서도 App.tsx 같은 최상위 컴포넌트에서 렌더링해야 한다.
 */
export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        
    }
`;
