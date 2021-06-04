import styled from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface StyledSelectContainerProps {
  color: DoifColorType;
  width: string | number;
  height: string | number;
  disabled: boolean;
}

export const StyledSelectContainer = styled.div<StyledSelectContainerProps>`
  & {
    position: relative;
    width: ${(props) => props.width};
    /* min-width: 8rem; */
  }

  .back-icon {
    cursor: ${(props) => !props.disabled && 'pointer'};
  }

  & input:not(.search-input):not(:disabled) {
    color: transparent;
    text-shadow: 0 0 0 ${(props) => props.theme.subColors.text};

    &:focus {
      outline: none;
    }
  }

  & > select {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  & > div.select-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 100;
    width: 100%;
    max-height: ${(props) => props.height};
    overflow: auto;
    background: #fff;
    border: none;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
    margin-top: 0.5rem;
    border-radius: 4px;

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

    & > div.search-input-container {
      & > input {
        width: 100%;
        padding: 0.5rem;
        box-sizing: border-box;
        border-width: 0;
        border-radius: ${(props) => props.theme.variants.borderRadius};
        background-color: ${(props) =>
          props.theme.mainColors[props.color].light};
      }
    }

    & > div.list-container {
      font-size: 0.8rem;
      text-align: left;

      & > div {
        padding: 0.5rem;
        cursor: pointer;

        &:hover {
          background-color: ${(props) =>
            props.theme.mainColors[props.color].light};
        }
      }

      & > div.selected {
        color: ${(props) => props.theme.mainColors[props.color].base};
        font-style: italic;
        font-weight: 600;
      }
    }
  }
`;
