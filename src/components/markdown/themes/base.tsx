import styled, { css } from 'styled-components';
import { DoifColorType } from '../../../styles/themes/DoifThemeProps';

export interface StyleBaseThemeProps {
  color: DoifColorType;
}

export const BaseTheme = styled.div<StyleBaseThemeProps>`
  & {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
    line-height: 1.6;
    padding: 0.5rem;
    color: ${(props) => props.theme.markdown.textColor};
    background-color: ${(props) => props.theme.markdown.bgColor};

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: ${(props) => props.theme.mainColors[props.color].base};
    }

    ::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }

    /* 제목 스타일 */
    h1,
    h2,
    h3,
    h4,
    h5 {
      display: block;
      font-weight: 600;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }

    h1,
    h2 {
      border-bottom: 1px solid ${(props) => props.theme.markdown.lineColor};
    }

    h1 {
      padding-bottom: 0.2rem;
      font-size: 2rem;
    }

    h2 {
      padding-bottom: 0.1rem;
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    h4 {
      font-size: 1rem;
    }

    h5 {
      font-size: 0.85rem;
    }

    /* 블럭 인용문구 '> ' */
    blockquote {
      margin-top: 2rem;
      margin-bottom: 2rem;
      border-top-right-radius: ${(props) => props.theme.markdown.borderRadius};
      border-bottom-right-radius: ${(props) =>
        props.theme.markdown.borderRadius};
      margin-left: 0px;
      margin-right: 0px;
      border-left: 4px solid
        ${(props) => props.theme.mainColors[props.color].base};
      background: ${(props) => props.theme.markdown.boxBgColor};
      padding: 1rem 1rem 1rem 1rem;
    }

    blockquote blockquote {
      margin-bottom: -1rem;
    }

    /* 코드 블럭 */
    pre,
    code {
      background-color: ${(props) => props.theme.markdown.boxBgColor};
      border-radius: ${(props) => props.theme.markdown.borderRadius};
      font-size: 0.85rem;
      padding: 0.1rem 0.2rem 0.1rem 0.2rem;
    }

    pre > code {
      padding: 0;
      display: block;
      width: 100%;
      overflow: auto;
    }

    pre {
      padding: 0.5rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      line-height: 1.7;
    }

    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
      border-radius: ${(props) => props.theme.markdown.borderRadius};
    }

    /* 수평선 */
    hr {
      height: 1px;
      background-color: ${(props) => props.theme.markdown.lineColor};
    }

    /* 강조 */
    em {
      font-style: italic;
    }

    strong {
      font-weight: 600;
    }

    /* List */
    ol {
      list-style-type: decimal;
      padding-left: 2rem;
      margin-bottom: 1rem;

      li {
        &::marker {
          unicode-bidi: isolate;
          font-variant-numeric: tabular-nums;
          text-transform: none;
          text-indent: 0px !important;
          text-align: start !important;
          text-align-last: start !important;
        }
      }
    }

    ol ol,
    ul ol {
      list-style-type: lower-roman;
      margin-bottom: 0;
    }

    ul {
      list-style-type: disc;
      padding-left: 2rem;
      margin-bottom: 1rem;

      li {
        &::marker {
          unicode-bidi: isolate;
          font-variant-numeric: tabular-nums;
          text-transform: none;
          text-indent: 0px !important;
          text-align: start !important;
          text-align-last: start !important;
        }
      }
    }

    ol ul,
    ul ul {
      list-style-type: circle;
      margin-bottom: 0;
    }

    /* 테이블 */
    table th {
      font-weight: 600;
      padding: 6px 13px;
    }

    table tr {
      background-color: ${(props) => props.theme.markdown.bgColor};
      border-top: 1px solid ${(props) => props.theme.markdown.tableBorderColor};
    }

    table tr:nth-child(2n) {
      background-color: ${(props) => props.theme.markdown.boxBgColor};
    }

    table th,
    table td {
      padding: 6px 13px;
      border: 1px solid ${(props) => props.theme.markdown.tableBorderColor};
    }
  }
`;
