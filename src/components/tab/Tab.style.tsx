import styled from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface StyledTabContainerProps {
  color: DoifColorType;
  height: string | number;
}

export const StyledTabContainer = styled.div<StyledTabContainerProps>`
  & {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
  }

  & > div.tab-header-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    position: relative;
    background-color: ${(props) => props.theme.mainColors[props.color].base};
    height: auto;
    padding-top: 0.5rem;
    /* padding-right: 5px; */
    /* padding-left: 5px; */
    border: 1px solid ${(props) => props.theme.mainColors[props.color].base};
    border-bottom: none;
    border-top-left-radius: ${(props) => props.theme.variants.borderRadius};
    border-top-right-radius: ${(props) => props.theme.variants.borderRadius};

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.subColors.content};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: ${(props) => props.theme.subColors.border};
    }

    ::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }

    & > label {
      display: flex;
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: auto;
      overflow: hidden;
      outline: none;
      position: relative;
      width: max-content;

      border-top-left-radius: ${(props) => props.theme.variants.borderRadius};
      border-top-right-radius: ${(props) => props.theme.variants.borderRadius};

      &:not(:disabled) {
        cursor: pointer;
      }

      & > input {
        display: none;
      }

      background-color: ${(props) => props.theme.mainColors[props.color].base};
      color: ${(props) => props.theme.subColors.content};
      padding: 0.5rem;

      &.selected {
        background-color: ${(props) => props.theme.subColors.boxBackground};
        color: ${(props) => props.theme.mainColors[props.color].dark};
      }

      &.disabled {
        opacity: 0.3;
        cursor: auto;
      }

      & > span {
        font-size: 0.8rem;
      }

      span.ripple-effect {
        background-color: ${(props) =>
          props.theme.mainColors[props.color].base};
      }
    }
  }

  & > div.tab-content-container {
    padding: 0.5rem;
    border: 1px solid ${(props) => props.theme.mainColors[props.color].base};
    border-top: none;
    border-bottom-left-radius: ${(props) => props.theme.variants.borderRadius};
    border-bottom-right-radius: ${(props) => props.theme.variants.borderRadius};
    min-height: ${(props) => props.height};
  }
`;
