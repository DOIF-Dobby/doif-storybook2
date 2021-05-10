import styled, { css } from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface StyledTextareaProps {
  color: DoifColorType;
  width: string | number;
  disabled: boolean;
  resize: 'none' | 'both' | 'vertical' | 'horizontal';
}

/** Textarea 컴포넌트의 스타일 */
export const StyledTextarea = styled.div<StyledTextareaProps>`
  & {
    width: ${(props) => props.width};
    /* min-width: 8rem; */
    position: relative;
  }

  & > textarea {
    width: 100%;
    border: ${(props) =>
      `${props.theme.variants.borderWidth} solid ${props.theme.subColors.border}`};
    border-radius: ${(props) => props.theme.variants.borderRadius};
    background-color: ${(props) => props.theme.subColors.content};
    color: ${(props) => props.theme.subColors.text};
    padding: 0.5rem;
    resize: ${(props) => props.resize};

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

    &:focus {
      border: ${(props) =>
        `2px solid ${props.theme.mainColors[props.color].base}`};
      border-radius: ${(props) => props.theme.variants.borderRadius};
    }

    &::placeholder {
      color: ${(props) => props.theme.subColors.border};
    }

    &:disabled {
      border-color: ${(props) => props.theme.subColors.disabled};
      color: ${(props) => props.theme.subColors.disabled};

      &::placeholder {
        color: ${(props) => props.theme.subColors.disabled};
      }
    }
  }
`;
