import styled from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface StyledTabContainerProps {
  color: DoifColorType;
}

export const StyledTabContainer = styled.div<StyledTabContainerProps>`
  & {
    display: flex;
    flex-direction: column;
  }

  & > div.tab-header-container {
    display: flex;
    background-color: ${(props) => props.theme.mainColors[props.color].base};
    height: auto;
    padding-top: 0.5rem;
    /* padding-right: 5px; */
    /* padding-left: 5px; */
    border: 1px solid ${(props) => props.theme.mainColors[props.color].base};
    border-bottom: none;
    border-top-left-radius: ${(props) => props.theme.variants.borderRadius};
    border-top-right-radius: ${(props) => props.theme.variants.borderRadius};

    & > label {
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
        background-color: ${(props) =>
          props.theme.subColors.componentBackground};
        color: ${(props) => props.theme.mainColors[props.color].dark};
      }

      &.disabled {
        opacity: 0.3;
        cursor: auto;
      }

      & > span {
        font-size: 0.8rem;
      }
    }
  }

  & > div.tab-content-container {
    padding: 0.5rem;
    border: 1px solid ${(props) => props.theme.mainColors[props.color].base};
    border-top: none;
    border-bottom-left-radius: ${(props) => props.theme.variants.borderRadius};
    border-bottom-right-radius: ${(props) => props.theme.variants.borderRadius};
  }
`;
