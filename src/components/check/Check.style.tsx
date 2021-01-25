import styled, { css } from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface StyledCheckContainerProps {
  color: DoifColorType;
  disabled: boolean;
}

/** Check 컴포넌트 스타일  */
export const StyledCheckContainer = styled.div<StyledCheckContainerProps>`
  & {
    display: flex;
  }

  & > label {
    display: flex;
    justify-content: left;
    align-items: center;
    width: fit-content;
    margin-right: 0.5rem;

    &:hover {
      ${(props) => !props.disabled && `cursor: pointer`};
    }

    & > input[type='checkbox'] {
      display: none;
    }

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;

      overflow: hidden;
      outline: none;
      position: relative;
      border-radius: 1rem;
      width: 2rem;
      height: 2rem;

      &:hover {
        & > div.background {
          opacity: 0.1;
          background-color: ${(props) =>
            props.theme.mainColors[props.color].base};
        }
      }

      span.ripple-effect {
        background-color: ${(props) =>
          props.theme.mainColors[props.color].base};
      }
    }

    & > div > div.background {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    & > div > div.checkbox {
      border: ${(props) =>
        `2px solid ${props.theme.mainColors[props.color].base}`};
      border-radius: ${(props) => props.theme.variants.borderRadius};

      opacity: ${(props) => props.disabled && 0.5};

      & svg {
        opacity: 0;
      }
    }

    // 체크 됬을 때 스타일
    & > div > div.checked {
      border: ${(props) =>
        `2px solid ${props.theme.mainColors[props.color].base}`};
      border-radius: ${(props) => props.theme.variants.borderRadius};
      background-color: ${(props) => props.theme.mainColors[props.color].base};

      & svg {
        fill: ${(props) => props.theme.subColors.content};
        opacity: 1;
      }
    }

    & > span {
      width: max-content;
      margin-left: 0.5rem;
      color: ${(props) =>
        props.disabled
          ? props.theme.subColors.disabled
          : props.theme.subColors.text};
    }
  }
`;
