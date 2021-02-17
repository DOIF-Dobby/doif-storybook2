import styled, { css } from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface StyledMarkdownEditorProps {
  color: DoifColorType;
  width: string | number;
  disabled: boolean;
}

/** MarkdownEditor 컴포넌트의 스타일 */
export const StyledMarkdownEditor = styled.div<StyledMarkdownEditorProps>`
  .cm-s-doif {
    font-family: Menlo, Monaco, 'Courier New', monospace;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme.markdown.textColor};
    background-color: ${(props) =>
      props.disabled
        ? props.theme.markdown.disableBgColor
        : props.theme.markdown.bgColor};

    height: 100%;
    width: ${(props) => props.width};
    border: ${(props) =>
      `${props.theme.variants.borderWidth} solid ${props.theme.subColors.border}`};
    border-radius: ${(props) => props.theme.variants.borderRadius};
    padding: 0.5rem;

  }
  .cm-s-doif.CodeMirror-focused {
    border: ${(props) =>
      `2px solid ${props.theme.mainColors[props.color].base}`};
      border-radius: ${(props) => props.theme.variants.borderRadius};
  }
  .cm-s-doif .CodeMirror-selected {
    background-color: rgba(0, 0, 0, 0.125);
  }
  .cm-s-doif .CodeMirror-gutter,
  .cm-s-doif .CodeMirror-gutters {
    border: none;
    background-color: ${(props) => props.theme.markdown.bgColor};
  }
  .cm-s-doif .CodeMirror-linenumber,
  .cm-s-doif .CodeMirror-linenumbers {
    /* color: #9d9d9f !important; */
    background-color: transparent;
  }
  .cm-s-doif .CodeMirror-lines {
    /* color: #383a42 !important; */
    background-color: transparent;
  }
  /* .cm-s-doif .CodeMirror-cursor {
    border-left: 2px solid #56b6c2 !important;
  } */
  /* addon: edit/machingbrackets.js & addon: edit/matchtags.js */
  .cm-s-doif .CodeMirror-matchingbracket,
  .cm-s-doif .CodeMirror-matchingtag {
    border-bottom: 2px solid #56b6c2;
    color: #383a42 !important;
    background-color: transparent;
  }
  .cm-s-doif .CodeMirror-nonmatchingbracket {
    border-bottom: 2px solid #e06c75;
    /* color: #383a42 */
    background-color: transparent;
  }
  /* addon: fold/foldgutter.js */
  .cm-s-doif .CodeMirror-foldmarker,
  .cm-s-doif .CodeMirror-foldgutter,
  .cm-s-doif .CodeMirror-foldgutter-open,
  .cm-s-doif .CodeMirror-foldgutter-folded {
    border: none;
    text-shadow: none;
    color: #9d9d9f !important;
    background-color: transparent;
  }
  /* addon: selection/active-line.js */
  .cm-s-doif .CodeMirror-activeline-background {
    /*background-color: rgba(153, 187, 255, 0.04);*/
    background-color: #000;
  }

  /* basic syntax */
  .cm-s-doif .cm-header {
    display: block;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  .cm-s-doif .cm-header-1 {
    font-size: 2rem;
  }
  .cm-s-doif .cm-header-2 {
    font-size: 1.5rem;
  }
  .cm-s-doif .cm-header-3 {
    font-size: 1.25rem;
  }
  .cm-s-doif .cm-header-4 {
    font-size: 1rem;
  }
  .cm-s-doif .cm-header-5 {
    font-size: 0.85rem;
  }

  .cm-s-doif .cm-quote {
    color: ${(props) => props.theme.markdown.quoteColor};
    font-style: italic;
  }
  .cm-s-doif .cm-negative {
    color: #e06c75;
  }
  .cm-s-doif .cm-positive {
    color: #e06c75;
  }
  .cm-s-doif .cm-strong {
    font-weight: bold;
  }
  .cm-s-doif .cm-header .cm-strong {
    font-weight: bold;
  }
  .cm-s-doif .cm-em {
    font-style: italic;
  }
  .cm-s-doif .cm-header .cm-em {
    font-style: italic;
  }
  .cm-s-doif .cm-tag {
    color: ${(props) => props.theme.markdown.commentColor};
  }
  .cm-s-doif .cm-attribute {
    color: ${(props) => props.theme.markdown.attributeColor};
  }
  .cm-s-doif .cm-link {
    color: ${(props) => props.theme.markdown.linkColor};
    /* border-bottom: solid 1px ${(props) => props.theme.markdown.linkColor}; */
    text-decoration: none;
  }
  .cm-s-doif .cm-builtin {
    color: #e06c75;
  }
  .cm-s-doif .cm-keyword {
    color: #0184bc;
  }
  .cm-s-doif .cm-def {
    color: #cf9d41;
  } /* original:  #e45649; */
  .cm-s-doif .cm-atom {
    color: #0184bc;
  }
  .cm-s-doif .cm-number {
    color: #986801;
  }
  .cm-s-doif .cm-property {
    color: #e45649;
  } /* original: #383a42 */
  .cm-s-doif .cm-qualifier {
    color: #e45649;
  }
  .cm-s-doif .cm-variable {
    color: #e06c75;
  }
  .cm-s-doif .cm-url {
    color: ${(props) => props.theme.markdown.urlColor};
  }
  .cm-s-doif .cm-punctuation {
    color: #383a42;
  }
  .cm-s-doif .cm-operator {
    color: #56b6c2;
  } /* original: #383a42 */
  .cm-s-doif .cm-meta {
    color: #808080;
  }
  .cm-s-doif .cm-bracket {
    color: ${(props) => props.theme.markdown.commentColor};
  }
  .cm-s-doif .cm-comment {
    color: ${(props) => props.theme.markdown.commentColor};
    font-style: italic;
  }
  .cm-s-doif .cm-error {
    color: #e06c75;
  }
  /* css syntax corrections */
  .cm-s-doif .cm-m-css.cm-variable {
    color: #828997;
  }
  .cm-s-doif .cm-m-css.cm-property {
    color: #383a42;
  }
  .cm-s-doif .cm-m-css.cm-atom {
    color: #0184bc;
  }
  .cm-s-doif .cm-m-css.cm-builtin {
    color: #56b6c2;
  }
  /* lua syntax corrections */
  .cm-s-doif .cm-m-lua.cm-variable {
    color: #56b6c2;
  }

  /** 스크롤 바 */
  .CodeMirror-vscrollbar {
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
  }
`;
