import styled, { css } from 'styled-components';

export const BaseTheme = styled.div`
  & {
    width: 100%;
    line-height: 1.6;

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
      border-bottom: 1px solid
        ${(props) => props.theme.mainColors.primary.light};
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

    /* p {
      line-height: 1.6;
    } */

    /* 블럭 인용문구 '> ' */
    blockquote {
      margin-top: 2rem;
      margin-bottom: 2rem;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      margin-left: 0px;
      margin-right: 0px;
      border-left: 4px solid ${(props) => props.theme.mainColors.primary.base};
      background: rgb(248, 249, 250, 0.8);
      padding: 1rem 1rem 1rem 2rem;
    }

    /* 코드 블럭 */
    pre,
    code {
      background-color: ${(props) => props.theme.mainColors.primary.light};
      border-radius: ${(props) => props.theme.variants.borderRadius};
      font-size: 0.85rem;
      padding: 0.1rem 0.2rem 0.1rem 0.2rem;
      color: ${(props) => props.theme.subColors.text};
    }

    pre > code {
      padding: 0;
    }

    pre {
      padding: 0.5rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      line-height: 1.7;
    }

    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
      border-radius: 4px;
    }

    /* 수평선 */
    hr {
      height: 2px;
      background-color: ${(props) => props.theme.mainColors.primary.light};
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
  }
`;
