import commonjs from '@rollup/plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

const extensions = ['.js', '.jsx', '.ts', '.tsx']; // 어떤 확장자를 처리 할 지 정함

// babel-preset-react-app를 사용한다면 BABEL_ENV를 필수로 설정해야함.
process.env.BABEL_ENV = 'production';

export default {
  input: './src/index.ts', // 어떤 파일부터 불러올지 정함.
  plugins: [
    peerDepsExternal() /* peerDependencies로 설치한 라이브러리들을 external 모듈로 설정
                               즉, 번들링된 결과에 포함시키지 않음 */,
    resolve({ extensions }), // node_modules 에서 모듈을 불러올 수 있게 해줌. ts/tsx 파일도 불러올 수 있게 해줌
    commonjs({
      include: 'node_modules/**',
    }), // CommonJS 모듈을 ES6으로 변환하는 롤업 플러그인입니다. react-table 때문에 필요함
    babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }), // Babel을 사용 할 수 있게 해줌
    url(), // 미디어 파일을 dataURI 형태로 불러와서 사용 할 수 있게 해줌.
    svgr(), // SVG를 컴포넌트로 사용 할 수 있게 해줌.
    typescript(), // interface도 export 할 수 있게 해줌
    terser(), // build 결과물 난독화 해줌
    postcss({
      // 사용된 css를 뽑아서 `doif-react-kit.css` 파일로 추출한다. 라이브러리를 사용하는 쪽에선 App.tsx에 imprt 'doif-react-uikit/dist/doif-react-kit.css' 해서 사용한다.
      plugins: [],
      extract: 'doif-react-kit.css',
    }),
  ],
  output: [
    {
      file: pkg.module, // 번들링한 파일을 저장 할 경로
      format: 'es', // ES Module 형태로 번들링함
    },
  ],
};
