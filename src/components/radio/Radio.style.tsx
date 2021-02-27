import styled from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface StyledRadioContainerProps {
  color: DoifColorType;
  disabled: boolean;
}

/** Radio 컴포넌트 스타일  */
export const StyledRadioContainer = styled.div<StyledRadioContainerProps>`
  & {
    display: flex;
    user-select: none;
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

    & > input[type='radio'] {
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
            !props.disabled && props.theme.mainColors[props.color].base};
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

    & > div > div.radiobox {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;

      border: ${(props) =>
        `2px solid ${props.theme.mainColors[props.color].base}`};

      opacity: ${(props) => props.disabled && 0.5};

      & > div.checked {
        background-color: ${(props) =>
          props.theme.mainColors[props.color].base};

        width: 0.5rem;
        height: 0.5rem;
        border-radius: 0.5rem;
      }
    }

    & > span {
      width: max-content;
      margin-left: 0.1rem;
      color: ${(props) =>
        props.disabled
          ? props.theme.subColors.disabled
          : props.theme.subColors.text};
    }
  }
`;
